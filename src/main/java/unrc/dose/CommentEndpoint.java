package unrc.dose;

import static com.beerboy.ss.descriptor.EndpointDescriptor.endpointPath;
import static com.beerboy.ss.descriptor.MethodDescriptor.path;

import java.util.Map;
import com.google.gson.Gson;

import com.beerboy.ss.SparkSwagger;
import com.beerboy.ss.rest.Endpoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *Endpoint wrapping everything related to Comments.
 */
public final class CommentEndpoint implements Endpoint {

  /**logger... */
  static final Logger LOGGER = LoggerFactory.getLogger(CommentEndpoint.class);

  /**main namespace of this endpoint. */
  private static final String NAME_SPACE = "/comments";

  /**service used to manipulate in memory the bellies.
   */
  private static CommentService commentService = new CommentService();

  @Override
  public void bind(final SparkSwagger restApi) {

    restApi.endpoint(
          endpointPath(NAME_SPACE)
              .withDescription(
                  "comment REST API exposing all comments utilities"
              ),
        (q, a) -> LOGGER.info("Logging Received request for Comment Rest API")
      )
        .get(
          path("/users/:id")
              .withDescription("Will return all comments of user's id")
              .withPathParam()
                  .withName("id")
                  .withDescription("user's id").and()
              .withResponseType(String.class),
          (req, res) -> {
              return commentService.view(
                Integer.parseInt(req.params(":id")), new User());
          }
      )
        .get(
         path("/challenges/:id")
             .withDescription("Will return all comments of user's id")
             .withPathParam()
                 .withName("id")
                 .withDescription("challenge's id").and()
             .withResponseType(String.class),
          (req, res) -> {
            System.out.println("ACAAAAAAAAAAAAAA"+req.params(":id"));
            return commentService.view(
              Integer.parseInt(req.params(":id")), new Challenge());
          }
      )
        .get(
         path("/responses/:id")
             .withDescription("Will return all responses of comment's id")
             .withPathParam()
                 .withName("id")
                 .withDescription("comment's id").and()
             .withResponseType(String.class),
          (req, res) -> {
            return commentService.view(
              Integer.parseInt(req.params(":id")), new Comment());
          }
      )
        .get(
          path("/comment/:id")
            .withDescription(
              "Will return the comment with the id passed as a parameter")
            .withPathParam()
              .withName("id")
              .withDescription("comment's id").and()
            .withResponseType(String.class),
          (req, res) -> {
            return commentService.find(
              Integer.parseInt(req.params(":id")));
          }
      )
        .post(
          path("/createComment")
              .withDescription("Creates a new Comment")
              .withQueryParam()
                  .withName("title")
                  .withDescription("Comment's title").and()
                .withQueryParam()
                  .withName("description")
                  .withDescription("Comment's body").and()
                .withQueryParam()
                  .withName("challengeId")
                  .withDescription("challenge's id which is commented").and()
                .withQueryParam()
                  .withName("userId")
                  .withDescription(" user's id who commented").and()
              .withResponseType(String.class),
          (req, res) -> {
            Map<String, Object> bodyParams = new Gson().fromJson(req.body(), Map.class);
              return commentService.comment(bodyParams.get("title").toString(),
                     bodyParams.get("description").toString(),
                     Integer.parseInt(bodyParams.get("challengeId").toString()),
                     Integer.parseInt(bodyParams.get("userId").toString()));

          }
      )
        .post(
          path("/createResponse")
              .withDescription("Creates a new Response")
              .withQueryParam()
                  .withName("description")
                  .withDescription("Response's body").and()
              .withQueryParam()
                  .withName("userId")
                  .withDescription(" user's id who commented").and()
              .withQueryParam()
                  .withName("commentId")
                  .withDescription("comment's id witch is responsed").and()
              .withResponseType(String.class),
               "application/json",
          (req, res) -> {
    
             Map<String, Object> bodyParams = new Gson().fromJson(req.body(), Map.class);
              return commentService.response(bodyParams.get(
                    "description").toString(), Integer.parseInt(bodyParams.get("userId").toString()),
                      Integer.parseInt(bodyParams.get("commentId").toString()));
          }
      )
      .delete(
        path("/deleteComment/:id")
            .withDescription("Deletes a Comment with it's Responses")
            .withPathParam()
                .withName("id")
                .withDescription("comment_id").and()
            .withResponseType(String.class),
             "application/json",
        (req, res) -> {
          return commentService.delete(Integer.parseInt(req.params(":id")));
        }
    );
  }

}
