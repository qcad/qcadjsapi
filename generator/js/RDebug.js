
      // auto generated
      //var self;

      // class constructor:
      function RDebug() {
        

        // should be RDebug_BaseJs.call(this, engine):
        //RDebug.prototype = new RDebug_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDebug.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDebug);
            //}
          }
          else {
            qWarning("RDebug.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDebug.js: No constructor found for class RDebug");
            
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //RDebug.prototype = new RDebug_BaseJs(engine);
      //RDebug.prototype = new RDebug_Wrapper(engine);
      RDebug.prototype = new Object();

      RDebug.prototype.toString = function() {
          //return "RDebug [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDebug [JS]";
        };
      RDebug.getObjectType = function() {
        return RJSType_RDebug.getIdStatic();
      };

      RDebug.prototype.getObjectType = function() {
        return RJSType_RDebug.getIdStatic();
      };

      RDebug.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDebug.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDebug.printBacktrace = function() 
          
        {
          //print("JS: RDebug.printBacktrace");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.printBacktrace(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.printBacktrace(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.startTimer = function() 
          
        {
          //print("JS: RDebug.startTimer");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.startTimer(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.startTimer(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.stopTimer = function() 
          
        {
          //print("JS: RDebug.stopTimer");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.stopTimer(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.stopTimer(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.stopTimer(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.timeStamp = function() 
          
        {
          //print("JS: RDebug.timeStamp");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.timeStamp(
                  
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.timeStamp(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.hexDump = function() 
          
        {
          //print("JS: RDebug.hexDump");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.hexDump(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.hexDump(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.incCounter = function() 
          
        {
          //print("JS: RDebug.incCounter");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.incCounter(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.incCounter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.decCounter = function() 
          
        {
          //print("JS: RDebug.decCounter");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.decCounter(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.decCounter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.getCounter = function() 
          
        {
          //print("JS: RDebug.getCounter");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.getCounter(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.getCounter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.printCounter = function() 
          
        {
          //print("JS: RDebug.printCounter");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.printCounter(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.printCounter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.printCounters = function() 
          
        {
          //print("JS: RDebug.printCounters");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.printCounters(
                  
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.printCounters(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.setPrefix = function() 
          
        {
          //print("JS: RDebug.setPrefix");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.setPrefix(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.setPrefix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDebug.getPrefix = function() 
          
        {
          //print("JS: RDebug.getPrefix");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDebug_WrapperSingletonInstance.getPrefix(
                  
                );
              

        //copyProperties(this, wrapper, RDebug);
  }

  
  else {
    
        print("RDebug.getPrefix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDebug.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDebug.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    