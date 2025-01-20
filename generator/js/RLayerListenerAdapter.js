
      // auto generated
      //var self;

      // class constructor:
      function RLayerListenerAdapter() {
        

        // should be RLayerListenerAdapter_BaseJs.call(this, engine):
        //RLayerListenerAdapter.prototype = new RLayerListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayerListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RLayerListenerAdapter);
                
            //}
          }
          else {
            qWarning("RLayerListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLayerListenerAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RLayerListenerAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayerListenerAdapter);
  }

  
  else {
    
        print("RLayerListenerAdapter(): wrong number / type of arguments");
      
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
              
    this["layersUpdated(RDocumentInterface*,QList<int>)"] = Object.getPrototypeOf(this).layersUpdated;
  
    this["currentLayerSet(RDocumentInterface*,int)"] = Object.getPrototypeOf(this).currentLayerSet;
  
            }
          
        }

        

      }

      //RLayerListenerAdapter.prototype = new RLayerListenerAdapter_BaseJs(engine);
      //RLayerListenerAdapter.prototype = new RLayerListenerAdapter_Wrapper(engine);
      RLayerListenerAdapter.prototype = new Object();

      RLayerListenerAdapter.prototype.toString = function() {
          //return "RLayerListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayerListenerAdapter [JS]";
        };
      RLayerListenerAdapter.getObjectType = function() {
        return RJSType_RLayerListenerAdapter.getIdStatic();
      };

      RLayerListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RLayerListenerAdapter.getIdStatic();
      };

      RLayerListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayerListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RLayerListener.getIdStatic()) {
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
      //RLayerListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayerListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      