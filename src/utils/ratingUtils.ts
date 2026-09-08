/**
 * Rating utility for SFR (ScrimForge Rating) / Elo-style calculations.
 */

export interface RatingConfig {
  kFactor: number;
}

const DEFAULT_CONFIG: RatingConfig = {
  kFactor: 32,
};

/**
 * Calculates the expected score for a player/team based on their rating and the opponent's rating.
 * 
 * @param rating The current rating of the player/team.
 * @param opponentRating The rating of the opponent.
 * @returns The expected score (between 0 and 1).
 */
export const calculateExpectedScore = (rating: number, opponentRating: number): number => {
  return 1 / (1 + Math.pow(10, (opponentRating - rating) / 400));
};

/**
 * Calculates the new rating after a match.
 * 
 * @param currentRating The current rating of the player/team.
 * @param opponentRating The rating of the opponent.
 * @param actualScore The actual score of the match (1 for win, 0.5 for draw, 0 for loss).
 * @param config Optional configuration for the calculation (e.g., kFactor).
 * @returns The new rating.
 */
export const calculateNewRating = (
  currentRating: number,
  opponentRating: number,
  actualScore: number,
  config: RatingConfig = DEFAULT_CONFIG
): number => {
  const expectedScore = calculateExpectedScore(currentRating, opponentRating);
  const newRating = currentRating + config.kFactor * (actualScore - expectedScore);
  return Math.round(newRating);
};

/**
 * Calculates the rating change for both participants in a match.
 * 
 * @param playerRating The rating of the player/team.
 * @param opponentRating The rating of the opponent.
 * @param playerActualScore The actual score of the player (1, 0.5, or 0).
 * @param config Optional configuration.
 * @returns An object containing the new rating and the change for the player.
 */
export const calculateRatingChange = (
  playerRating: number,
  opponentRating: number,
  playerActualScore: number,
  config: RatingConfig = DEFAULT_CONFIG
) => {
  const expectedScore = calculateExpectedScore(playerRating, opponentRating);
  const ratingChange = Math.round(config.kFactor * (playerActualScore - expectedScore));
  const newRating = playerRating + ratingChange;

  return {
    newRating,
    ratingChange,
  };
};
