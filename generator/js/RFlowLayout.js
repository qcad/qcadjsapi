
      // auto generated
      //var self;

      // class constructor:
      function RFlowLayout() {
        

        // should be RFlowLayout_BaseJs.call(this, engine):
        //RFlowLayout.prototype = new RFlowLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFlowLayout.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFlowLayout);
            //}
          }
          else {
            qWarning("RFlowLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RFlowLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFlowLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFlowLayout);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RFlowLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFlowLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFlowLayout);
  }

  
  else {
    
        print("RFlowLayout(): wrong number / type of arguments");
      
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

      //RFlowLayout.prototype = new RFlowLayout_BaseJs(engine);
      //RFlowLayout.prototype = new RFlowLayout_Wrapper(engine);
      RFlowLayout.prototype = new Object();

      RFlowLayout.prototype.toString = function() {
          //return "RFlowLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFlowLayout [JS]";
        };
      RFlowLayout.getObjectType = function() {
        return RJSType_RFlowLayout.getIdStatic();
      };

      RFlowLayout.prototype.getObjectType = function() {
        return RJSType_RFlowLayout.getIdStatic();
      };

      RFlowLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFlowLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
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
      //RFlowLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFlowLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    