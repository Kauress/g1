window.isServerLess = true;
window.gameSession = {
    langCode: "EN",
    gameSetup: {
        name: {
            EN: "Hidden Object Demo Game",
            FR: "fr_Hidden Object Demo Game"
        },
        phrases: {
            EN: {
                TITLE_TEXT: "Hidden Object",
                INTRO_DESCRIPTION: "Congratulations! <br/> You've earned a chance play and win up to <br/><b> 100 Points!<b/>",
                INTRO_BUTTON: "Learn how to play!",
                RULES_DESCRIPTION: "Find the hidden object icon out of all random icons displayed on the board to move up a round.",
                PLAY_BUTTON: "Start playing!",
                NO_POINTS_PRIZE_HEADING: "",
                POINTS_PRIZE_HEADING: "Congratulations!",
                POINTS_WINNER_DESC: "You've won",
                POINTS_TAIL: "Points",
                POINTS_DESCRIPTION: "",
                NO_PRIZE_AVAILABLE: "",
                REAL_PRIZE_DESCRIPTION: "",
                DRAW_DESCRIPTION: "",
                INSTRUCTIONS: "",
                CLAIM_PRIZE_BUTTON: "Claim Prize!"
            },
            FR: {}
        },
        options: {
            skinCode: "home",
            // 10 seconds
            totalTime: 10,
            decreasePercentage: 25,
            addTimeOnWin: 0,
            minRoundsToWin: 8,
            roundsData: []
        },
        prizes: [
            {minScore: 0, maxScore: 0, prizeID:1, code: "0", name: "So close!", desc: "Thanks for playing!", points: 0, totalAvailable: 20, limitedQuantity: 50, isAddressNeeded: 0, isEmailNeeded: 0, isPhoneNeeded: 0 },
            {minScore: 1, maxScore: 1, prizeID:3, code: "100", points: 100, totalAvailable: 20, limitedQuantity: 20, isAddressNeeded: 0, isEmailNeeded: 0, isPhoneNeeded: 0 }
        ]
    }
};
