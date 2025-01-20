
      // auto generated
      //var self;

      // class constructor:
      function RInterTransactionListenerAdapter() {
        

        // should be RInterTransactionListenerAdapter_BaseJs.call(this, engine):
        //RInterTransactionListenerAdapter.prototype = new RInterTransactionListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RInterTransactionListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RInterTransactionListenerAdapter);
                
            //}
          }
          else {
            qWarning("RInterTransactionListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RInterTransactionListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RInterTransactionListenerAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RInterTransactionListenerAdapter);
  }

  
  else {
    
        print("RInterTransactionListenerAdapter(): wrong number / type of arguments");
      
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
              
    this["transactionInProgress(RDocument*,RTransaction*)"] = Object.getPrototypeOf(this).transactionInProgress;
  
            }
          
        }

        

      }

      //RInterTransactionListenerAdapter.prototype = new RInterTransactionListenerAdapter_BaseJs(engine);
      //RInterTransactionListenerAdapter.prototype = new RInterTransactionListenerAdapter_Wrapper(engine);
      RInterTransactionListenerAdapter.prototype = new Object();

      RInterTransactionListenerAdapter.prototype.toString = function() {
          //return "RInterTransactionListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RInterTransactionListenerAdapter [JS]";
        };
      RInterTransactionListenerAdapter.getObjectType = function() {
        return RJSType_RInterTransactionListenerAdapter.getIdStatic();
      };

      RInterTransactionListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RInterTransactionListenerAdapter.getIdStatic();
      };

      RInterTransactionListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RInterTransactionListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RInterTransactionListener.getIdStatic()) {
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
      //RInterTransactionListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RInterTransactionListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      