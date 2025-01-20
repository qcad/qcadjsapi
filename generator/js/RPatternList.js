
      // auto generated
      //var self;

      // class constructor:
      function RPatternList() {
        

        // should be RPatternList_BaseJs.call(this, engine):
        //RPatternList.prototype = new RPatternList_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPatternList.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPatternList);
                
            //}
          }
          else {
            qWarning("RPatternList.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPatternList.js: No constructor found for class RPatternList");
            
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

      //RPatternList.prototype = new RPatternList_BaseJs(engine);
      //RPatternList.prototype = new RPatternList_Wrapper(engine);
      RPatternList.prototype = new Object();

      RPatternList.prototype.toString = function() {
          //return "RPatternList [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPatternList [JS]";
        };
      RPatternList.getObjectType = function() {
        return RJSType_RPatternList.getIdStatic();
      };

      RPatternList.prototype.getObjectType = function() {
        return RJSType_RPatternList.getIdStatic();
      };

      RPatternList.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPatternList.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPatternList.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPatternList.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      