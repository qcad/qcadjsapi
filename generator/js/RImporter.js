
      // auto generated
      //var self;

      // class constructor:
      function RImporter() {
        

        // should be RImporter_BaseJs.call(this, engine):
        //RImporter.prototype = new RImporter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RImporter.getIdStatic()))) {

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
            qWarning("RImporter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RImporter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RImporter);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RImporter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RImporter);
  }

  
  else {
    
        print("RImporter(): wrong number / type of arguments");
      
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

      //RImporter.prototype = new RImporter_BaseJs(engine);
      //RImporter.prototype = new RImporter_Wrapper(engine);
      RImporter.prototype = new Object();


      RImporter.prototype.toString = function() {
          //return "RImporter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RImporter [JS]";
        };
      RImporter.getObjectType = function() {
        return RJSType_RImporter.getIdStatic();
      };

      RImporter.prototype.getObjectType = function() {
        return RJSType_RImporter.getIdStatic();
      };

      RImporter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RImporter.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RImporter.prototype.startImport = function(...args) 
          
        {
          //print("JS: RImporter.prototype.startImport");
          
              return this.__PROXY__.startImport(...args);
            
        };
        
        // function 
        RImporter.prototype.endImport = function(...args) 
          
        {
          //print("JS: RImporter.prototype.endImport");
          
              return this.__PROXY__.endImport(...args);
            
        };
        
        // function 
        RImporter.prototype.importObjectP = function(...args) 
          
        {
          //print("JS: RImporter.prototype.importObjectP");
          
              return this.__PROXY__.importObjectP(...args);
            
        };
        
        // function 
        RImporter.prototype.importObject = function(...args) 
          
        {
          //print("JS: RImporter.prototype.importObject");
          
              return this.__PROXY__.importObject(...args);
            
        };
        
        // function 
        RImporter.prototype.setCurrentBlockId = function(...args) 
          
        {
          //print("JS: RImporter.prototype.setCurrentBlockId");
          
              return this.__PROXY__.setCurrentBlockId(...args);
            
        };
        
        // function 
        RImporter.prototype.getCurrentBlockId = function(...args) 
          
        {
          //print("JS: RImporter.prototype.getCurrentBlockId");
          
              return this.__PROXY__.getCurrentBlockId(...args);
            
        };
        
        // function 
        RImporter.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RImporter.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
        
        // function 
        RImporter.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RImporter.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
        
        // function 
        RImporter.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RImporter.prototype.setKnownVariable");
          
              return this.__PROXY__.setKnownVariable(...args);
            
        };
        

      // static functions:
      RImporter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RImporter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RImporter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RImporter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RImporter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RImporter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      