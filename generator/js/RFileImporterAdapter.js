
      // auto generated
      //var self;

      // class constructor:
      function RFileImporterAdapter() {
        

        // should be RFileImporterAdapter_BaseJs.call(this, engine):
        //RFileImporterAdapter.prototype = new RFileImporterAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileImporterAdapter.getIdStatic()))) {

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
            qWarning("RFileImporterAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RFileImporterAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileImporterAdapter);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFileImporterAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileImporterAdapter);
  }

  
  else {
    
        print("RFileImporterAdapter(): wrong number / type of arguments");
      
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

      //RFileImporterAdapter.prototype = new RFileImporterAdapter_BaseJs(engine);
      //RFileImporterAdapter.prototype = new RFileImporterAdapter_Wrapper(engine);
      RFileImporterAdapter.prototype = new Object();


      RFileImporterAdapter.prototype.toString = function() {
          //return "RFileImporterAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileImporterAdapter [JS]";
        };
      RFileImporterAdapter.getObjectType = function() {
        return RJSType_RFileImporterAdapter.getIdStatic();
      };

      RFileImporterAdapter.prototype.getObjectType = function() {
        return RJSType_RFileImporterAdapter.getIdStatic();
      };

      RFileImporterAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileImporterAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RImporter.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RFileImporter.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RFileImporterAdapter.prototype.startImport = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.startImport");
          
              return this.__PROXY__.startImport(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.endImport = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.endImport");
          
              return this.__PROXY__.endImport(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.importObjectP = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.importObjectP");
          
              return this.__PROXY__.importObjectP(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.importObject = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.importObject");
          
              return this.__PROXY__.importObject(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.setCurrentBlockId = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.setCurrentBlockId");
          
              return this.__PROXY__.setCurrentBlockId(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.getCurrentBlockId = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.getCurrentBlockId");
          
              return this.__PROXY__.getCurrentBlockId(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
    
        // function 
        RFileImporterAdapter.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RFileImporterAdapter.prototype.setKnownVariable");
          
              return this.__PROXY__.setKnownVariable(...args);
            
        };
    
      // function 
      RFileImporterAdapter.prototype.importFile = function() 
        
      {
        //print("JS: RFileImporterAdapter.prototype.importFile");
        
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.importFile(
                // call highest level JS implementation:
                //return this.importFileBase(
                
                    return this.__PROXY__.importFileSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RFileImporterAdapter);
  }

  
  else {
    
        print("RFileImporterAdapter.importFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      RFileImporterAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFileImporterAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFileImporterAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileImporterAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileImporterAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFileImporterAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      