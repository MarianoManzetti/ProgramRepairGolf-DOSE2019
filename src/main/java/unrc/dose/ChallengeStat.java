package unrc.dose;

import org.javalite.activejdbc.Model;

/**
* == Schema Info
*
* Table name: challenge_stats
*
*  id              :int(11)    not null, primary key,
*  challenge_id    :int(11)    not null,
*  created_at      :datetime,
*  updated_at      :datetime,
*  average_score   :float,
*  solved_count    :int(11)
*
**/

/**
* ChallengeStat class represents a person into the system.
*/
public class ChallengeStat extends Model {


    /**
     * Updates the number of times that a challenge has been solved.
     *@param challengeSToupdate The challenge stat which contains the current
     number of solutions.
     *@return Returns the updated solved count.
     */
    private static int incrementSolvedCount(
        final ChallengeStat challengeSToupdate) {
        int currentSolvedCount = (int) challengeSToupdate.get("solved_count");
        currentSolvedCount++;

        challengeSToupdate.set("solved_count", currentSolvedCount);
        challengeSToupdate.saveIt();

        return currentSolvedCount;
    }

    /**
     *Using the id of the last proposition submitted for a challenge, updates
     the average score obtained by all users who solved it.
     *@param propositionId The id of the proposition submitted.
     */
    public static void updateAverageScore(final int propositionId) {
        //getting the info about the proposition

        Proposition solution = Proposition.findById(propositionId);
        int distance = solution.getInteger("distance");
        int challengeId = solution.getInteger("challenge_id");

        Challenge currentChallenge = Challenge.findById(challengeId);
        int challengePoints = currentChallenge.getInteger("point");

        int userScore = challengePoints - distance;

        ChallengeStat challengeSToupdate = ChallengeStat.findFirst(
        "challenge_id = ?", challengeId);

        //getting the current average score and the current solved count
        float currentAverage = challengeSToupdate.getFloat("average_score");
        int currentSolvedCount = incrementSolvedCount(challengeSToupdate);

        float updatedAverageScore = currentAverage
        + ((userScore - currentAverage) / currentSolvedCount);

        challengeSToupdate.set("average_score", updatedAverageScore);
        challengeSToupdate.saveIt();

    }

    /**
     *Generates a new ChallengeStat table for a incoming new challenge.
     *@param challengeId The id of the new challenge.
     *@return the challenge stat created in the database.
     */
    public static ChallengeStat newChallengeStat(final int challengeId) {
        ChallengeStat c = ChallengeStat.createIt(
        "challenge_id", challengeId, "average_score", 0.0, "solved_count", 0);

        return c;
    }

    public static ChallengeStat getChallengeStat(final int challengeId) {
        return (ChallengeStat.findFirst("challenge_id = ? ", challengeId));
    }

    /**
     * hashCode redefined.
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + this.getInteger("id").hashCode();
        return result;
    }

    /**
     *Compares ChallengeStat objects.
     *@param cs the ChallengeStat Object to compare.
     *@return the boolean result of comparing each field of the ChallengeStat
     Objects.
     */
    @Override
    public boolean equals(final Object cs) {
        ChallengeStat cs2 = (ChallengeStat) cs;

        return ((this.getInteger("id") == cs2.getInteger("id"))
        && (this.get("challenge_id") == cs2.get("challenge_id"))
        && ((float) this.get("average_score") == (float) cs2.get(
        "average_score")) && (this.get("solved_count") == cs2.get(
        "solved_count")));
    }
}
