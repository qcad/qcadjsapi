
      // auto generated
      //var self;

      // class constructor:
      function RViewListenerAdapter() {
        

        // should be RViewListenerAdapter_BaseJs.call(this, engine):
        //RViewListenerAdapter.prototype = new RViewListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RViewListenerAdapter);
                
            //}
          }
          else {
            qWarning("RViewListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RViewListenerAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RViewListenerAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RViewListenerAdapter);
  }

  
  else {
    
        print("RViewListenerAdapter(): wrong number / type of arguments");
      
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
              
    this["viewsUpdated(RDocumentInterface*)"] = Object.getPrototypeOf(this).viewsUpdated;
  
            }
          
        }

        

      }

      //RViewListenerAdapter.prototype = new RViewListenerAdapter_BaseJs(engine);
      //RViewListenerAdapter.prototype = new RViewListenerAdapter_Wrapper(engine);
      RViewListenerAdapter.prototype = new Object();

      RViewListenerAdapter.prototype.toString = function() {
          //return "RViewListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewListenerAdapter [JS]";
        };
      RViewListenerAdapter.getObjectType = function() {
        return RJSType_RViewListenerAdapter.getIdStatic();
      };

      RViewListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RViewListenerAdapter.getIdStatic();
      };

      RViewListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RViewListener.getIdStatic()) {
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
      //RViewListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      