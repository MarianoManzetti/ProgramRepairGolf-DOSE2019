package unrc.dose;

import com.beerboy.ss.SparkSwagger;
import com.beerboy.ss.rest.Endpoint;
import com.google.gson.Gson;
import org.javalite.activejdbc.LazyList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.beerboy.ss.descriptor.ParameterDescriptor.*;
import com.beerboy.ss.descriptor.ParameterDescriptor;
import static com.beerboy.ss.descriptor.ParameterDescriptor.newBuilder;

import static com.beerboy.ss.descriptor.EndpointDescriptor.endpointPath;
import static com.beerboy.ss.descriptor.MethodDescriptor.path;
// import static com.beerboy.ss.descriptor.EndpointDescriptor.endpointPath;


/** Endpoint wrapping everything related to Users. */
public final class UserEndpoint implements Endpoint {
    /** logger... */
    static final Logger LOGGER = LoggerFactory.getLogger(UserEndpoint.class);

    /** main name-space of this endpoint. */
    private static final String NAME_SPACE = "/user";

   ArrayList<ParameterDescriptor> list = new ArrayList<ParameterDescriptor>();


    /** service used to manipulate in memory the users. */
    //private static User user = new User();

    @Override
    public void bind(final SparkSwagger restApi) {
        list.add(ParameterDescriptor.newBuilder().withName("username").build());

        restApi.endpoint(
            endpointPath(NAME_SPACE)
                .withDescription(
                    "user REST API exposing all users utilities"
                ),
            (q, a) -> LOGGER.info("Logging Received request for User Rest API")
        )
        .get(
            path("/users")
                .withDescription("Will return all users in the store")
                .withResponseType(String.class),
            (req, res) -> {
                Map<String, String> userss = new HashMap<String, String>();
            	String list = new String();
                LazyList<User> use = User.findAll();
                for(User u : use) {
                    userss.put(String.valueOf(u.getId()), u.getName());
                }

                ArrayList a = new ArrayList(userss.values());
                System.out.println(a);
                return new Gson().toJson(a);
            }
        )
        .post(
            path("/signUp")
            .withDescription("Will return a boolean that describe if user has been created succesfully or not")
            .withParams(
                list
                // new ParameterDescriptor() Esta comentado por que aun no
                //                           encontramos como hacer para especificar que los parametros vienen en el body
            )
                // .withName("username")
                // .withName("password")
                // .withDescription("The password is the key to log in the system")
                // .withName("email_address")
                // .withDescription("The email_address is the form to contact with the user")
            //.and()
            .withResponseType(String.class),
            (req, res) -> {
                Map<String,Object> bodyParams = new Gson().fromJson(req.body(),Map.class);


                if (!User.userExistsByUsername((String)bodyParams.get("username"))) {
                    if(!User.userExistsByEmail((String)bodyParams.get("email_address"))) {
                      res.status(200);
                      User.set((String)bodyParams.get("username"),(String)bodyParams.get("password"), (String)bodyParams.get("email_address"), true);
                      return"";
                    } else {
                      res.status(401);
                      return"";
                    }
                  }else {
                    res.status(401);
                  }
                System.out.println(res.status());
                return"";

            }
        )
          .post(
            path("/login")
                .withDescription("Verify user data for log in the system")
                .withPathParam()
                    .withName("username")
                    .withDescription("This is the user trying to log in")
                    .withName("password")
                    .withDescription("This is pass with which will user try log in")
                    .and()
                .withResponseType(String.class),
            (req, res) -> {
                    Map<String,Object> bodyParams = new Gson().fromJson(req.body(),Map.class);
                    String username = (String) bodyParams.get("username");
                    String pass = (String) bodyParams.get("password");
                    if(User.validateCredentials(username, pass)) {
                      res.status(200);
                      User u = User.findFirst("username = ?", username);
                      String us = u.toJson(true);
                      res.body(us);
                    } else {
                      res.status(401);
                    }
                    return "";
                }
        )

        .put(
            path("/resetPassword")
                .withDescription("Send a new pass")
                .withPathParam()
                    .withName("email_address")
                    .withDescription("This param is for reset pass")
                    .and()
                .withResponseType(String.class),
            (req, res) -> {
            Map<String,Object> bodyParams = new Gson().fromJson(req.body(),Map.class);
            String email = (String) bodyParams.get("email_address");

            if(User.resetPassword(email)) {
                res.status(200);
            } else {
                res.status(401);
            }
            System.out.println(res.status());
              return "";
            }
        )

        .put(
            path("/updatePassword")
                .withDescription("Update a user's password")
                .withPathParam()
                    .withName("email_address")
                    .withDescription("This is the email param of user for update his pass")
                    .withName("oldPassword")
                    .withDescription("This is the password saved in database of user for update his pass, used as a security measure")
                    .withName("newPassword")
                    .withDescription("This is the new pass for update his pass, used as a security measure")
                .and()
                .withResponseType(Boolean.class),
            (req, res) -> {
               Map<String,Object> bodyParams = new Gson().fromJson(req.body(),Map.class);

            	return(User.updatePassword((String)bodyParams.get("email_address"),(String)bodyParams.get("oldPassword"), (String)bodyParams.get("newPassword")));
            }
        )


        .put(
            path("/updateEmail")
                .withDescription("Update email of user data")
                .withPathParam()
                    .withName("newEmail_address")
                    .withDescription("This is the email for to be changed")
                    .withName("username")
                    .withDescription("This is the username for search user")
                    .and()
                .withResponseType(Boolean.class),
            (req, res) -> {
            Map<String,Object> bodyParams = new Gson().fromJson(req.body(),Map.class);

            	return(User.updateEmail((String)bodyParams.get("newEmail_address"), (String)bodyParams.get("username")));
            }
        )




        .put(
            path("/disableAccount")
                .withDescription("Disable logically user account")
                .withPathParam()
                    .withName("username")
                    .withDescription("This is the user to disable")
                    .withName("password")
                    .withDescription("This is pass with which will user disable account")
                    .and()
                .withResponseType(Boolean.class),
            (req, res) -> {
                 Map<String,Object> bodyParams = new Gson().fromJson(req.body(),Map.class);

                return(User.disableUser((String)bodyParams.get("username"), (String)bodyParams.get("password")));

            }
        );
    }
}
