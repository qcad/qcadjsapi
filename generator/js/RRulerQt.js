
      // auto generated
      //var self;

      // class constructor:
      function RRulerQt() {
        

        // should be RRulerQt_BaseJs.call(this, engine):
        //RRulerQt.prototype = new RRulerQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRulerQt.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRulerQt);
            //}
          }
          else {
            qWarning("RRulerQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RRulerQt_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRulerQt);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      //RRulerQt.prototype = new RRulerQt_BaseJs(engine);
      //RRulerQt.prototype = new RRulerQt_Wrapper(engine);
      RRulerQt.prototype = new Object();

      RRulerQt.prototype.toString = function() {
          //return "RRulerQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRulerQt [JS]";
        };
      RRulerQt.getObjectType = function() {
        return RJSType_RRulerQt.getIdStatic();
      };

      RRulerQt.prototype.getObjectType = function() {
        return RJSType_RRulerQt.getIdStatic();
      };

      RRulerQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRulerQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RRuler.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RCoordinateListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPaletteListener.getIdStatic()) {
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
      //RRulerQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRulerQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    