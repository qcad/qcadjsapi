
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsViewQt() {
        

        // should be RGraphicsViewQt_BaseJs.call(this, engine):
        //RGraphicsViewQt.prototype = new RGraphicsViewQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsViewQt.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RGraphicsViewQt);
            //}
          }
          else {
            qWarning("RGraphicsViewQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RGraphicsViewQt_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RGraphicsViewQt);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsViewQt);
  }

  
  else {
    
        print("RGraphicsViewQt(): wrong number / type of arguments");
      
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
            
    this["drop(QDropEvent*)"] = Object.getPrototypeOf(this).drop;
  
    this["dragEnter(QDragEnterEvent*)"] = Object.getPrototypeOf(this).dragEnter;
  
          }
        }
      }

      //RGraphicsViewQt.prototype = new RGraphicsViewQt_BaseJs(engine);
      //RGraphicsViewQt.prototype = new RGraphicsViewQt_Wrapper(engine);
      RGraphicsViewQt.prototype = new Object();

      RGraphicsViewQt.prototype.toString = function() {
          //return "RGraphicsViewQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsViewQt [JS]";
        };
      RGraphicsViewQt.getObjectType = function() {
        return RJSType_RGraphicsViewQt.getIdStatic();
      };

      RGraphicsViewQt.prototype.getObjectType = function() {
        return RJSType_RGraphicsViewQt.getIdStatic();
      };

      RGraphicsViewQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsViewQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RGraphicsViewQt.prototype.resizeEvent = function() 
          
        {
          //print("JS: RGraphicsViewQt.prototype.resizeEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.resizeEvent(
                // call highest level JS implementation:
                //return this.resizeEventBase(
                return this.resizeEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsViewQt);
  }

  
  else {
    
        print("RGraphicsViewQt.resizeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsViewQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsViewQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    