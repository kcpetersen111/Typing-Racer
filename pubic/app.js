const SENTENCES = [
    "The quick brown fox jumped over the fence.",
    "It's been over a fence, I'm starting to think that tractor is never coming back.",
    "What do you believe to be the answer to my problems?",
]

var app = new Vue({
    el: "#app",
    data:{
        sentence:"",
        input:"",
        startTime:"",
        finTime:"",
    },
    methods:{
        startRace: function () {
            this.startTime = new Date();
        },
        getRandomSentence: function () {
            let magicNumber = math.floor(math.random()*SENTENCES.length);
            this.sentence = SENTENCES[magicNumber];
        },
        calculateTotalTime: function () {
            let temp = new Date();
            this.finTime = temp - this.startTime();
            
        },
        resetTest: function () {
            this.finTime = "";
        },
        resetWithNewSentence: function () {
            this.finTime = "";
            this.getRandomSentence();
        }
    },
    computed: {
        // this function runs whenever the sentence the user is typing changes
        // use it like a variable (v-if="finishedTyping")
        finishedTyping: function () {
            // you probably wanna use your variable here in place of these awful ones
            if (this.sentence == this.input) {
                this.calculateTotalTime();
                return true;
            } else {
                return false;
            }
        }
    },
    created: function () {
        this.getRandomSentence();

    }
});

/*
extra cool additions:
 - Keep a high score that stays between attempts
 - Let the user pick the sentence that they will be typing
 - Show a timer on the screen as they are typing
*/