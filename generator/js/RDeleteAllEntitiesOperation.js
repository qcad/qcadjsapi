
      // auto generated
      //var self;

      // class constructor:
      function RDeleteAllEntitiesOperation() {
        

        // should be RDeleteAllEntitiesOperation_BaseJs.call(this, engine):
        //RDeleteAllEntitiesOperation.prototype = new RDeleteAllEntitiesOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDeleteAllEntitiesOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RDeleteAllEntitiesOperation);
                
            //}
          }
          else {
            qWarning("RDeleteAllEntitiesOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDeleteAllEntitiesOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RDeleteAllEntitiesOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDeleteAllEntitiesOperation);
  }

  
  else {
    
        print("RDeleteAllEntitiesOperation(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //RDeleteAllEntitiesOperation.prototype = new RDeleteAllEntitiesOperation_BaseJs(engine);
      //RDeleteAllEntitiesOperation.prototype = new RDeleteAllEntitiesOperation_Wrapper(engine);
      RDeleteAllEntitiesOperation.prototype = new Object();

      RDeleteAllEntitiesOperation.prototype.toString = function() {
          //return "RDeleteAllEntitiesOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDeleteAllEntitiesOperation [JS]";
        };
      RDeleteAllEntitiesOperation.getObjectType = function() {
        return RJSType_RDeleteAllEntitiesOperation.getIdStatic();
      };

      RDeleteAllEntitiesOperation.prototype.getObjectType = function() {
        return RJSType_RDeleteAllEntitiesOperation.getIdStatic();
      };

      RDeleteAllEntitiesOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDeleteAllEntitiesOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
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
      //RDeleteAllEntitiesOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDeleteAllEntitiesOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      