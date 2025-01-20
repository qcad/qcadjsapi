
      // auto generated
      //var self;

      // class constructor:
      function RStemmer() {
        

        // should be RStemmer_BaseJs.call(this, engine):
        //RStemmer.prototype = new RStemmer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RStemmer.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RStemmer);
                
            //}
          }
          else {
            qWarning("RStemmer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RStemmer.js: No constructor found for class RStemmer");
            
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
          
        }

        

      }

      //RStemmer.prototype = new RStemmer_BaseJs(engine);
      //RStemmer.prototype = new RStemmer_Wrapper(engine);
      RStemmer.prototype = new Object();

      RStemmer.prototype.toString = function() {
          //return "RStemmer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RStemmer [JS]";
        };
      RStemmer.getObjectType = function() {
        return RJSType_RStemmer.getIdStatic();
      };

      RStemmer.prototype.getObjectType = function() {
        return RJSType_RStemmer.getIdStatic();
      };

      RStemmer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RStemmer.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RStemmer.stem = function() 
          
        {
          //print("JS: RStemmer.stem");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RStemmer_WrapperSingletonInstance.stem(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RStemmer);
  }

  
  else {
    
        print("RStemmer.stem(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RStemmer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RStemmer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      