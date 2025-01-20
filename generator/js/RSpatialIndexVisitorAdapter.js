
      // auto generated
      //var self;

      // class constructor:
      function RSpatialIndexVisitorAdapter() {
        

        // should be RSpatialIndexVisitorAdapter_BaseJs.call(this, engine):
        //RSpatialIndexVisitorAdapter.prototype = new RSpatialIndexVisitorAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpatialIndexVisitorAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RSpatialIndexVisitorAdapter);
                
            //}
          }
          else {
            qWarning("RSpatialIndexVisitorAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSpatialIndexVisitorAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RSpatialIndexVisitorAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpatialIndexVisitorAdapter);
  }

  
  else {
    
        print("RSpatialIndexVisitorAdapter(): wrong number / type of arguments");
      
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

      //RSpatialIndexVisitorAdapter.prototype = new RSpatialIndexVisitorAdapter_BaseJs(engine);
      //RSpatialIndexVisitorAdapter.prototype = new RSpatialIndexVisitorAdapter_Wrapper(engine);
      RSpatialIndexVisitorAdapter.prototype = new Object();

      RSpatialIndexVisitorAdapter.prototype.toString = function() {
          //return "RSpatialIndexVisitorAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpatialIndexVisitorAdapter [JS]";
        };
      RSpatialIndexVisitorAdapter.getObjectType = function() {
        return RJSType_RSpatialIndexVisitorAdapter.getIdStatic();
      };

      RSpatialIndexVisitorAdapter.prototype.getObjectType = function() {
        return RJSType_RSpatialIndexVisitorAdapter.getIdStatic();
      };

      RSpatialIndexVisitorAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpatialIndexVisitorAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSpatialIndexVisitor.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RSpatialIndexVisitorAdapter.prototype.visitData = function() 
        
      {
        //print("JS: RSpatialIndexVisitorAdapter.prototype.visitData");
        
      if (arguments.length == 8) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.visitData(
                // call highest level JS implementation:
                //return this.visitDataBase(
                
                    return this.visitDataSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RSpatialIndexVisitorAdapter);
  }

  
  else {
    
        print("RSpatialIndexVisitorAdapter.visitData(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSpatialIndexVisitorAdapter.prototype.visitNode = function() 
        
      {
        //print("JS: RSpatialIndexVisitorAdapter.prototype.visitNode");
        
      if (arguments.length == 6) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.visitNode(
                // call highest level JS implementation:
                //return this.visitNodeBase(
                
                    return this.visitNodeSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RSpatialIndexVisitorAdapter);
  }

  
  else {
    
        print("RSpatialIndexVisitorAdapter.visitNode(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSpatialIndexVisitorAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpatialIndexVisitorAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      