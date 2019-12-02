package unrc.dose;

import static org.junit.Assert.*;

import org.javalite.activejdbc.Base;
import java.util.*;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import unrc.dose.Belly;
import unrc.dose.Challenge;
import unrc.dose.Comment;
import unrc.dose.User;

public class CommentTest {

  private static User user;
  private static User admin;
  private static Challenge ch;


  @BeforeClass
  public static void beforeClass() {
    if (!Base.hasConnection()) {
      Base.open();
      Base.openTransaction();
      user = User.set("Pepe", "root", "pepe@gmail.com", false);
      admin = User.set("Juana", "root", "juana@gmail.com", true);
      ch = Challenge.addChallenge(admin.getInteger("id"), "Test",
        "challenge1", "descripcion de prueba", "codigo", 20, user.getInteger("id"));
    }
  }

  @AfterClass
  public static void afterClass() {
    System.out.println("CommentTest tearDown");
    Base.rollbackTransaction();
    Base.close();
  }

  @Test
  public void loadComment() {
    Comment c = Comment.createComment(
        "Holi","Esto es un Comentario", ch.getInteger("id"), user.getInteger("id"));
    Comment aux = Comment.findById(c.getInteger("id"));
    assertNotNull(aux);
  }

  @Test
  public void loadResponse() {
    Comment c = new Comment();
    c.set("username","Username");
    c.set("title", "Titulo");
    c.set("description", "Descripcion");
    c.set("challenge_id", ch.getInteger("id"));
    c.set("user_id", user.getInteger("id"));
    c.saveIt();
    Comment rta = Comment.createResponse(
        "respuesta prueba",admin.getInteger("id"),c.getInteger("id"));
    Comment aux = Comment.findById(rta.getInteger("id"));
    assertNotNull(aux);
  }

  @Test
  public void deleteAComment(){
    Comment c = new Comment();
    c.set("username","Username");
    c.set("title", "Titulo");
    c.set("description", "Descripcion");
    c.set("challenge_id", ch.getInteger("id"));
    c.set("user_id", user.getInteger("id"));
    c.saveIt();
    Comment resp = Comment.createResponse(
        "respuesta test",admin.getInteger("id"),c.getInteger("id"));
    Comment resp2 = Comment.createResponse(
        "respuesta test2",admin.getInteger("id"),c.getInteger("id"));
    Comment.deleteComment(c.getInteger("id"));
    assertNull(Comment.findFirst("id = ?", c.getInteger("id")));
  }

  @Test (expected = IllegalArgumentException.class)
  public void testViewComment() {
    Belly b = new Belly(2, "Erika");
    List<Comment> list = Comment.viewComment(4, b);
  }

  @Test (expected = IllegalArgumentException.class)
  public void negativeTestViewComment() {
    List<Comment> list = Comment.viewComment(2, null);
  }

}
