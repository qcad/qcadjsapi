
      // auto generated
      //var self;

      // class constructor:
      function RRuler() {
        

        // should be RRuler_BaseJs.call(this, engine):
        //RRuler.prototype = new RRuler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRuler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RRuler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RRuler.js: No constructor found for class RRuler");
            
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

      //RRuler.prototype = new RRuler_BaseJs(engine);
      //RRuler.prototype = new RRuler_Wrapper(engine);
      RRuler.prototype = new Object();


      RRuler.prototype.toString = function() {
          //return "RRuler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRuler [JS]";
        };
      RRuler.getObjectType = function() {
        return RJSType_RRuler.getIdStatic();
      };

      RRuler.prototype.getObjectType = function() {
        return RJSType_RRuler.getIdStatic();
      };

      RRuler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRuler.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RRuler.prototype.setGraphicsView = function(...args) 
          
        {
          //print("JS: RRuler.prototype.setGraphicsView");
          
              return this.__PROXY__.setGraphicsView(...args);
            
        };
    
        // function 
        RRuler.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RRuler.prototype.getOrientation");
          
              return this.__PROXY__.getOrientation(...args);
            
        };
    
        // function 
        RRuler.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: RRuler.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
    
        // function 
        RRuler.prototype.paintTick = function(...args) 
          
        {
          //print("JS: RRuler.prototype.paintTick");
          
              return this.__PROXY__.paintTick(...args);
            
        };
    
        // function 
        RRuler.prototype.getFont = function(...args) 
          
        {
          //print("JS: RRuler.prototype.getFont");
          
              return this.__PROXY__.getFont(...args);
            
        };
    
        // function 
        RRuler.prototype.updateViewport = function(...args) 
          
        {
          //print("JS: RRuler.prototype.updateViewport");
          
              return this.__PROXY__.updateViewport(...args);
            
        };
    

      // static functions:
      RRuler.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RRuler.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RRuler.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRuler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRuler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RRuler.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      