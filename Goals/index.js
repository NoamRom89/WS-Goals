var events = require('events');
var util = require('util');
var date = new Date();
util.inherits(Record, events.EventEmitter);

    var logMsg ='';

    function Record(){
        this.goalsBalance = 0;
        events.EventEmitter.call(this);
    }

    exports.log = function() {
        return logMsg;
    };
    exports.createInstance = function (){
        var record =  new Record();
        record.on('goal',displayGoals);
        record.on('miss',displayMiss);
        return record;
    };

    Record.prototype.goal = function(){
        this.goalsBalance++;
        this.emit('goal');
    };

    Record.prototype.miss = function(){
      this.goalsBalance--;
        this.emit('miss');
    };

    //-- The callbacks functions

    function displayGoals(){
        console.log('Ronaldo scored: ' + this.goalsBalance + ' goals');
        logMsg += date.getDate() + ' Ronaldo scored: ' + this.goalsBalance + 'goals\n';
    }
    function displayMiss(){
        console.log('Ronaldo missed, his balance now: ' + this.goalsBalance );
        logMsg += date.getDate() + ' Ronaldo missed, his balance now: ' + this.goalsBalance + 'goals\n';

        if(this.goalsBalance < 0){
            console.log("Ronaldo in his lowest point of his life: " + this.goalsBalance);
            logMsg += date.getDate() + ' Ronaldo in his lowest point of his life: ' + this.goalsBalance + 'goals\n';
        }
    }






