
      // auto generated
      //var self;

      // class constructor:
      function RToolOptionEventFilter() {
        

        // should be RToolOptionEventFilter_BaseJs.call(this, engine):
        //RToolOptionEventFilter.prototype = new RToolOptionEventFilter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToolOptionEventFilter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RToolOptionEventFilter);
            //}
          }
          else {
            qWarning("RToolOptionEventFilter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RToolOptionEventFilter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RToolOptionEventFilter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RToolOptionEventFilter);
  }

  
  else {
    
        print("RToolOptionEventFilter(): wrong number / type of arguments");
      
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

      //RToolOptionEventFilter.prototype = new RToolOptionEventFilter_BaseJs(engine);
      //RToolOptionEventFilter.prototype = new RToolOptionEventFilter_Wrapper(engine);
      RToolOptionEventFilter.prototype = new Object();

      RToolOptionEventFilter.prototype.toString = function() {
          //return "RToolOptionEventFilter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToolOptionEventFilter [JS]";
        };
      RToolOptionEventFilter.getObjectType = function() {
        return RJSType_RToolOptionEventFilter.getIdStatic();
      };

      RToolOptionEventFilter.prototype.getObjectType = function() {
        return RJSType_RToolOptionEventFilter.getIdStatic();
      };

      RToolOptionEventFilter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToolOptionEventFilter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
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
      //RToolOptionEventFilter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToolOptionEventFilter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    