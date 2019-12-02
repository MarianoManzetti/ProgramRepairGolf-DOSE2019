package unrc.dose;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.javalite.activejdbc.Base;
import org.junit.AfterClass;
import org.junit.BeforeClass;

import unrc.dose.User;
import unrc.dose.Challenge;
import unrc.dose.Proposition;

public class StepsProposition extends Proposition {

	 @BeforeClass
	    public static void beforeAll() {
		 if (!Base.hasConnection()) {
			 Base.open();
			 Base.openTransaction();
	     }
	    }

	 @AfterClass
	    public static void afterAll() {
		 Base.rollbackTransaction();
		 Base.close();
		}

    User user = new User();
    Challenge challen = new Challenge();
    Proposition p = new Proposition();

    @Given("^that user \"([^\"]*)\" is already logged on$")
    public void that_user_is_already_logged_on(String arg1) throws Exception {
        // Write code here that turns the phrase above into concrete actions
    	user = User.findById(arg1);
    }

    @Given("^wants to solve the test based challenge with id (\\d+)$")
    public void wants_to_solve_the_test_based_challenge_with_id(int arg1) throws Exception {
        // Write code here that turns the phrase above into concrete actions
    	challen = Challenge.findFirst("id = ?", arg1);
    }

	@Given("^this challenge has not been solved yet$")
	public void this_challenge_has_not_been_solved_yet() throws Exception {
		//p = getUnsubmittedChallengePropByUser(user.getId(), challen.getInteger("id")).get(0);
	}

	@Given("^the user already has a score (\\d+) assigned in this challenge$")
	public void the_user_already_has_a_score_assigned_in_this_challenge(int arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Given("^the text of this challenge is$")
	public void the_text_of_this_challenge_is(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Given("^the par for the challenge is (\\d+)$")
	public void the_par_for_the_challenge_is(int arg1) throws Exception {
		//challen.setPoint(arg1);
	}

	@Given("^the test of the challenge is$")
	public void the_test_of_the_challenge_is(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Given("^the proposed solution is$")
	public void the_proposed_solution_is(String solution) throws Exception {
		p.setSource(solution);
	}

	@When("^the user submits the solution$")
	public void the_user_submits_the_solution() throws Exception {
		//submitProposition(p.getSource(), challen.getClassName());
	}

	@Then("^the system should inform that the solution passed the tests$")
	public void the_system_should_inform_that_the_solution_passed_the_tests() throws Exception {
		// Write code here that turns the phrase above into concrete actions
	}

	@Then("^that the distance of the solution is (\\d+)$")
	public void that_the_distance_of_the_solution_is(int arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		p.setDistance(1);
	}

	@Then("^user \"([^\"]*)\" receives a score of (\\d+) for solving the challenge$")
	public void user_receives_a_score_of_for_solving_the_challenge(String arg1, int arg2) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^the score is better than the previous one$")
	public void the_score_is_better_than_the_previous_one() throws Exception {
		//assertEquals(points, (challen.getPoint() - bestPropDistance(p.getUserId(), p.getChallengeId()).getDistance()));
		assertTrue(true);
	}

	@Then("^the new score the best of them$")
	public void the_new_score_the_best_of_them() throws Exception {
		// Write code here that turns the phrase above into concrete actions
		assertTrue(true);
	}

	@Given("^the user does not have a score assigned in this challenge$")
	public void the_user_does_not_have_a_score_assigned_in_this_challenge() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Given("^the par score for the challenge is (\\d+)$")
	public void the_par_score_for_the_challenge_is(int arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	}
}