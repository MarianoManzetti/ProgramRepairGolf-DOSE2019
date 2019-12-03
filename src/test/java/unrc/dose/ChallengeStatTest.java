package unrc.dose;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.*;

import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.LazyList;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 * Class to test the ChallengeStat class methods.
 * @author Fernandez, Camilo
 * @author Manzetti, Mariano
 */
public class ChallengeStatTest {

    @BeforeClass
	public static void before(){
        if (!Base.hasConnection()) {
            Base.open();
            Base.openTransaction();
        }

        User testUser = User.set("testName", "testPass", "testMail", false);
        int userId = testUser.getInteger("id");


        Challenge testChallenge = Challenge.addChallenge(userId, "testChallenge",
        "testClass", "testDesc", "testSrc", 20, 1);
        int challengeId = testChallenge.getInteger("id");

        Challenge testChallenge1 = Challenge.addChallenge(userId, "testChallenge1",
        "testClass1", "testDesc1", "testSrc1", 17, 1);
        int challengeId1 = testChallenge1.getInteger("id");

        Challenge testChallenge2 = Challenge.addChallenge(userId, "testChallenge2",
        "testClass2", "testDesc2", "testSrc2", 25, 1);
        int challengeId2 = testChallenge2.getInteger("id");

        Challenge testChallenge3 = Challenge.addChallenge(userId, "testChallenge3",
        "testClass3", "testDesc3", "testSrc3", 23, 1);
        int challengeId3 = testChallenge3.getInteger("id");

        Challenge testChallenge4 = Challenge.addChallenge(userId, "testChallenge4",
        "testClass4", "testDesc4", "testSrc4", 19, 1);
        int challengeId4 = testChallenge4.getInteger("id");

        Challenge testChallenge5 = Challenge.addChallenge(userId, "testChallenge5",
        "testClass5", "testDesc5", "testSrc5", 15, 1);
        int challengeId5 = testChallenge5.getInteger("id");


        Proposition.newProposition(userId, challengeId, "testSrc", true, 5, 0);

        Proposition testProposition1 = Proposition.newProposition(userId, challengeId1, "testSrc1", true, 3, 0);
        int propositionId1 = testProposition1.getInteger("id");

        Proposition testProposition2 = Proposition.newProposition(userId, challengeId1, "testSrc2", true, 7, 0);
        int propositionId2 = testProposition2.getInteger("id");

        Proposition testProposition3 = Proposition.newProposition(userId, challengeId1, "testSrc3", true, 4, 0);
        int propositionId3 = testProposition3.getInteger("id");

        Proposition testProposition4 = Proposition.newProposition(userId, challengeId1, "testSrc4", true, 5, 0);
        int propositionId4 = testProposition4.getInteger("id");

        Proposition testProposition5 = Proposition.newProposition(userId, challengeId1, "testSrc5", true, 7, 0);
        int propositionId5 = testProposition5.getInteger("id");

        Proposition testProposition6 = Proposition.newProposition(userId, challengeId2, "testSrc6", true, 3, 0);
        int propositionId6 = testProposition6.getInteger("id");

        Proposition testProposition7 = Proposition.newProposition(userId, challengeId2, "testSrc7", true, 7, 0);
        int propositionId7 = testProposition7.getInteger("id");

        Proposition testProposition8 = Proposition.newProposition(userId, challengeId2, "testSrc8", true, 4, 0);
        int propositionId8 = testProposition8.getInteger("id");

        Proposition testProposition9 = Proposition.newProposition(userId, challengeId2, "testSrc9", true, 5, 0);
        int propositionId9 = testProposition9.getInteger("id");

        Proposition testProposition10 = Proposition.newProposition(userId, challengeId3, "testSrc10", true, 7, 0);
        int propositionId10 = testProposition10.getInteger("id");

        Proposition testProposition11 = Proposition.newProposition(userId, challengeId3, "testSrc11", true, 3, 0);
        int propositionId11 = testProposition11.getInteger("id");

        Proposition testProposition12 = Proposition.newProposition(userId, challengeId3, "testSrc12", true, 7, 0);
        int propositionId12 = testProposition12.getInteger("id");

        Proposition testProposition13 = Proposition.newProposition(userId, challengeId3, "testSrc13", true, 4, 0);
        int propositionId13 = testProposition13.getInteger("id");

        Proposition testProposition14 = Proposition.newProposition(userId, challengeId4, "testSrc14", true, 5, 0);
        int propositionId14 = testProposition14.getInteger("id");

        Proposition testProposition15 = Proposition.newProposition(userId, challengeId4, "testSrc15", true, 7, 0);
        int propositionId15 = testProposition15.getInteger("id");

        Proposition testProposition16 = Proposition.newProposition(userId, challengeId4, "testSrc16", true, 3, 0);
        int propositionId16 = testProposition16.getInteger("id");

        Proposition testProposition17 = Proposition.newProposition(userId, challengeId5, "testSrc17", true, 7, 0);
        int propositionId17 = testProposition17.getInteger("id");

        Proposition testProposition18 = Proposition.newProposition(userId, challengeId5, "testSrc18", true, 4, 0);
        int propositionId18 = testProposition18.getInteger("id");

        Proposition testProposition19 = Proposition.newProposition(userId, challengeId1, "testSrc19", true, 3, 0);
        int propositionId19 = testProposition19.getInteger("id");

        Proposition testProposition20 = Proposition.newProposition(userId, challengeId2, "testSrc20", true, 3, 0);
        int propositionId20 = testProposition20.getInteger("id");


        ChallengeStat.updateAverageScore(propositionId1);
        ChallengeStat.updateAverageScore(propositionId2);
        ChallengeStat.updateAverageScore(propositionId3);
        ChallengeStat.updateAverageScore(propositionId4);
        ChallengeStat.updateAverageScore(propositionId5);
        ChallengeStat.updateAverageScore(propositionId6);
        ChallengeStat.updateAverageScore(propositionId7);
        ChallengeStat.updateAverageScore(propositionId8);
        ChallengeStat.updateAverageScore(propositionId9);
        ChallengeStat.updateAverageScore(propositionId10);
        ChallengeStat.updateAverageScore(propositionId11);
        ChallengeStat.updateAverageScore(propositionId12);
        ChallengeStat.updateAverageScore(propositionId13);
        ChallengeStat.updateAverageScore(propositionId14);
        ChallengeStat.updateAverageScore(propositionId15);
        ChallengeStat.updateAverageScore(propositionId16);
        ChallengeStat.updateAverageScore(propositionId17);
        ChallengeStat.updateAverageScore(propositionId18);
        ChallengeStat.updateAverageScore(propositionId19);
        ChallengeStat.updateAverageScore(propositionId20);

    }

    @AfterClass
	public static void after(){
        if (Base.hasConnection()) {
            Base.rollbackTransaction();
            Base.close();
        }
	}

    /**
     * Test for newChallengeStat() method.
    */
    @Test
    public void newChallengeStatTest() {

        ChallengeStat.newChallengeStat(500);
        ChallengeStat c = ChallengeStat.findFirst("challenge_id = ?", 500);

        assertNotNull(c);
        assertEquals(500, c.get("challenge_id"));
        assertEquals(0.0, c.get("average_score"));
        assertEquals(0, c.get("solved_count"));
    }

    /**
    * Test for updateAverageScore() method.
    */
    @Test
    public void updateAverageScoreTest() {

        List<Challenge> challengeList = Challenge.where("title = 'testChallenge'");
        Challenge testChallenge = challengeList.get(0);
        int challengeId = testChallenge.getInteger("id");
        ChallengeStat cs = ChallengeStat.getChallengeStat(challengeId);
        Proposition p = Proposition.findFirst("challenge_id = ?", challengeId);

        assertEquals(0.0, cs.get("average_score"));
        assertEquals(0, cs.get("solved_count"));

        ChallengeStat.updateAverageScore(p.getInteger("id"));

        ChallengeStat cs1 = ChallengeStat.findFirst("challenge_id = ?", challengeId);

        assertEquals(15.0, cs1.get("average_score"));
        assertEquals(1, cs1.get("solved_count"));

    }

    /**
     * Test for delete() method.
     */
    @Test
    public void deleteChallengeStatTest() {

        ChallengeStat c = ChallengeStat.newChallengeStat(16);

        assertNotNull(c);

        ChallengeStat.delete(16);

        c = ChallengeStat.getChallengeStat(16);

        assertNull(c);
    }

    /**
     * Test for getChallengeStat() method.
     */
    @Test
    public void getChallengeStatTest() {

        List<Challenge> challengeList = Challenge.where("title = 'testChallenge'");
        Challenge testChallenge = challengeList.get(0);
        int challengeId = testChallenge.getInteger("id");

        ChallengeStat c = ChallengeStat.findFirst("challenge_id = ?", challengeId);
        ChallengeStat result = ChallengeStat.getChallengeStat(challengeId);
        
        boolean comparison = result.equals(c);
        
        assertNotNull(result);
        assertTrue(comparison);

    }

    /**
     * Test for allChallengeStats() method.
     */
    @Test
    public void allChallengeStatsTest() {
        LazyList<ChallengeStat> allcs1 = (LazyList<ChallengeStat>) ChallengeStat.allChallengeStats();
        LazyList<ChallengeStat> allcs2 = ChallengeStat.findAll();
        
        int length1 = allcs1.size();
        int length2 = allcs2.size();

        assertEquals(length1, length2);
    }

    /**
     * Test for topFive() method.
     */
    @Test
    public void topFiveTest() {
        Challenge testChallenge1 = Challenge.findFirst("title = ?", "testChallenge1");
        int challengeId1 = testChallenge1.getInteger("id");
        Challenge testChallenge2 = Challenge.findFirst("title = ?", "testChallenge2");
        int challengeId2 = testChallenge2.getInteger("id");
        Challenge testChallenge3 = Challenge.findFirst("title = ?", "testChallenge3");
        int challengeId3 = testChallenge3.getInteger("id");
        Challenge testChallenge4 = Challenge.findFirst("title = ?", "testChallenge4");
        int challengeId4 = testChallenge4.getInteger("id");
        Challenge testChallenge5 = Challenge.findFirst("title = ?", "testChallenge5");
        int challengeId5 = testChallenge5.getInteger("id");

        ArrayList<ChallengeStat> topCS = ChallengeStat.topFive();

        boolean result1 = ChallengeStat.getChallengeStat(challengeId1).equals(topCS.get(0));
        boolean result2 = ChallengeStat.getChallengeStat(challengeId2).equals(topCS.get(1));
        boolean result3 = ChallengeStat.getChallengeStat(challengeId3).equals(topCS.get(2));
        boolean result4 = ChallengeStat.getChallengeStat(challengeId4).equals(topCS.get(3));
        boolean result5 = ChallengeStat.getChallengeStat(challengeId5).equals(topCS.get(4));

        assertTrue(result1);
        assertTrue(result2);
        assertTrue(result3);
        assertTrue(result4);
        assertTrue(result5);

    }
}
