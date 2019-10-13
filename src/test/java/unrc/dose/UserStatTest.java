package unrc.dose;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.javalite.activejdbc.LazyList;
import org.javalite.activejdbc.Base;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class UserStatTest {

private static final Logger log = LoggerFactory.getLogger(UserStatTest.class);

	@BeforeClass
	public static void beforeAll() {
		log.info("UserStatTest BeforeClass");
		Base.open();
	}

	@AfterClass
	public static void afterAll() {
		log.info("UserStatTest AfterClass");
		Base.close();
	}

	/**
	 * Test the method getUserId from
	 * UserStat class.
	 */
	@Test
	public void getUserIdTest() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat.createUserStat(u.getInteger("id"));
		UserStat stat = UserStat.findFirst("user_id = ?", u.get("id"));
		assertEquals(stat.getUserId(),stat.get("user_id"));
		u.delete();
	}
	/**
	 * Test the method getCreatedChallenges from
	 * UserStat class.
	 */
	@Test
	public void getCreatedChallengesTest() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat.createUserStat(u.getInteger("id"));
		UserStat stat = UserStat.findFirst("user_id = ?", u.get("id"));
		assertEquals(stat.getCreatedChallenges(),stat.get("created_challenges"));
		u.delete();
	}
	/**
	 * Test the method getSolvedChallenges from
	 * UserStat class.
	 */
	@Test
	public void getSolvedChallengesTest() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat.createUserStat(u.getInteger("id"));
		UserStat stat = UserStat.findFirst("user_id = ?", u.get("id"));
		assertEquals(stat.getSolvedChallenges(),stat.get("solved_challenges"));
		u.delete();
	}
	/**
	 * Test the method getCurrentPoints from
	 * UserStat class.
	 */
	@Test
	public void getCurrentPointsTest() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat.createUserStat(u.getInteger("id"));
		UserStat stat = UserStat.findFirst("user_id = ?", u.get("id"));
		assertEquals(stat.getCurrentPoints(),stat.get("current_points"));
		u.delete();
	}

	/**
	 * Test the method createUserStat from
	 * UserStat class.
	 */
	@Test
	public void createUserStat() {
		User u = new User();
		u.set("username","Hackerman-san");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsrl@gmail.com");
		u.saveIt();
		UserStat.createUserStat(u.getInteger("id"));
		UserStat stat = UserStat.findFirst("user_id = ?", u.get("id"));
		assertNotNull(stat);
		assertEquals(stat.getCreatedChallenges(),0);
		assertEquals(stat.getSolvedChallenges(),0);
		assertEquals(stat.getCurrentPoints(),0);
		u.delete();
	}

	/**
	 * Test the method getUserStat from
	 * UserStat class.
	 */
	@Test
	public void getUserStat() {
		User u = new User();
		u.set("password", "JohnDoe");
		u.set("username", "JohnDoe");
		u.set("email_address", "JohnDoe@gmail.com");
		u.save();
		UserStat.createUserStat(u.getInteger("id"));
		UserStat us = UserStat.findFirst("user_id = ?", u.get("id"));
		UserStat us2 = UserStat.getUserStat(u);
		assertEquals(us.getId().toString(), us2.getId().toString());
		assertEquals(us.get("user_id").toString(), us2.get("user_id").toString());
		u.delete();
	}

	/**
	 * Test the method showAllUserStat
	 * UserStat class.
	 */
	@Test
	public void showAllUserStat() {
		User u = new User();
		u.set("password", "ElMejor");
		u.set("username", "LaMosca");
		u.set("email_address", "LaMosca@gmail.com");
		u.save();
		UserStat.createUserStat(u.getInteger("id"));
		User u2 = new User();
		u2.set("password", "NotJohnConnor");
		u2.set("username", "Themosque");
		u2.set("email_address", "LaMosquita@gmail.com");
		u2.save();
		UserStat.createUserStat(u2.getInteger("id"));
		LazyList<UserStat> userStats = UserStat.showAllUserStat();
		for (int i = 0; i < userStats.size(); i++){
			UserStat stat = userStats.get(i);
			assertTrue(stat.getUserId() == u.getId() || stat.getUserId() == u2.getId());
		}
    u.delete();
    u2.delete();
	}
	
	/*Test for validators*/

	/**
	 * Test the validator of
	 * presence of user_id 
	 */
	@Test
	public void validatePresenceOfUserId() {
		UserStat stat = new UserStat();
		stat.set("created_challenges", 0);
		stat.set("solved_challenges", 0);
		stat.set("current_points", 0);
		assertFalse(stat.isValid());
	}
	
	/**
	 * Test the validator of
	 * presence of created_challenges 
	 */
	@Test
	public void validatePresenceOfCreatedChallenges() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat stat = new UserStat();
		stat.set("user_id", u.getId());
		stat.set("solved_challenges", 0);
		stat.set("current_points", 0);
		assertFalse(stat.isValid());
		u.delete();
	}
	
	/**
	 * Test the validator of
	 * presence of solved_challenges 
	 */
	@Test
	public void validatePresenceOfSolvedChallenges() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat stat = new UserStat();
		stat.set("user_id", u.getId());
		stat.set("created_challenges", 0);
		stat.set("current_points", 0);
		assertFalse(stat.isValid());
		u.delete();
	}
	
	/**
	 * Test the validator of
	 * presence of current_points 
	 */
	@Test
	public void validatePresenceOfCurrentPoints() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat stat = new UserStat();
		stat.set("user_id", u.getId());
		stat.set("created_challenges", 0);
		stat.set("solved_challenges", 0);
		assertFalse(stat.isValid());
		u.delete();
	}
	
	/**
	 * Test the validator of
	 * uniqueness for user_id 
	 */
	@Test
	public void validateUniquenessOfUserId() {
		User u = new User();
		u.set("username","Hackerman");
		u.set("password", "T3H4ck303lC0r4z0n");
		u.set("email_address", "hackingnsa@gmail.com");
		u.saveIt();
		UserStat.createUserStat(u.getId());
		UserStat stat = new UserStat();
		stat.set("user_id", u.getId());
		stat.set("created_challenges", 0);
		stat.set("solved_challenges", 0);
		stat.set("current_points", 0);
		assertFalse(stat.isValid());
		u.delete();
	}
}
