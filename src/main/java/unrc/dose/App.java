package unrc.dose;

import java.io.IOException;
import java.util.Arrays;
import static spark.Spark.*;

import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.LazyList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.beerboy.ss.SparkSwagger;
import com.beerboy.ss.rest.Endpoint;

import spark.Service;

public class App
{
	static User currentUser;
	static String urlCreate;
	static String urlReset;
	static final String CREATE_ACCOUNT_ROUTE = "/user/signUp";
	static final String RESET_ROUTE = "/user/resetPassword";

	static final Logger LOGGER = LoggerFactory.getLogger(App.class);

    public static Service spark = Service.ignite().port(55555);

    public static void main( String[] args ) {

      try {
        SparkSwagger
          .of(spark).before((request, response) -> {
              if (!Base.hasConnection()) {
                  Base.open();
                }
								String url = request.pathInfo();
								if(url.length() == 12){
									urlCreate = request.pathInfo().substring(0, 12);
								}else{
									if(url.length() == 19){
										urlReset = request.pathInfo().substring(0, 19);
									}else{
										urlCreate = "";
										urlReset = "";
									}
								}
								if (request.requestMethod() != "OPTIONS"){
								if((urlCreate == null) ||(!(urlCreate.equals(CREATE_ACCOUNT_ROUTE)))){

									if(urlReset.equals(RESET_ROUTE) != true){
										String headerToken = (String) request.headers("Authorization");

									if (
										headerToken == null ||
										headerToken.isEmpty() ||
										!BasicAuth.authorize(headerToken)
										) {
											halt(401);
											}
										currentUser = BasicAuth.getUser(headerToken);
									}
								}
							}
              }).after((request, response) -> {
                  if (Base.hasConnection()) {
                      Base.close();
                    }
              })
          .endpoints(() -> Arrays.asList(new BellyEndpoint(),
									new UserEndpoint(),
                  new UserStatEndpoint(),
                  new ChallengeEndPoint(),
                  new CompilationChallengeEndPoint(),
                  new TestChallengeEndPoint(),
                  new PropositionEndpoint(),
									new CommentEndpoint(),
				          new ChallengeStatEndpoint()))
          .generateDoc();
      }
      catch(IOException e) {
        LOGGER.error(e.getMessage());
      }

      spark.get("/hello/:name", (req, res) -> {
        return "hello" + req.params(":name");
      });

			spark.options("/*",
					(req, response) -> {
						return "OK";
					}
			);

      spark.get("/users", (req, res) -> {
        res.type("application/json");

        LazyList<User> users = User.findAll();

        return users.toJson(true, "username", "password");


      });
    }
}
