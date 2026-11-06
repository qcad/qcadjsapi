
      // auto generated
      //var self;

      // class constructor:
      function RFileImporter() {
        

        // should be RFileImporter_BaseJs.call(this, engine):
        //RFileImporter.prototype = new RFileImporter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileImporter.getIdStatic()))) {

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
            qWarning("RFileImporter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RFileImporter.js: No constructor found for class RFileImporter");
            
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

      //RFileImporter.prototype = new RFileImporter_BaseJs(engine);
      //RFileImporter.prototype = new RFileImporter_Wrapper(engine);
      RFileImporter.prototype = new Object();


      RFileImporter.prototype.toString = function() {
          //return "RFileImporter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileImporter [JS]";
        };
      RFileImporter.getObjectType = function() {
        return RJSType_RFileImporter.getIdStatic();
      };

      RFileImporter.prototype.getObjectType = function() {
        return RJSType_RFileImporter.getIdStatic();
      };

      RFileImporter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileImporter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RImporter.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RFileImporter.prototype.startImport = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.startImport");
          
              return this.__PROXY__.startImport(...args);
            
        };
        
        // function 
        RFileImporter.prototype.endImport = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.endImport");
          
              return this.__PROXY__.endImport(...args);
            
        };
        
        // function 
        RFileImporter.prototype.importObjectP = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.importObjectP");
          
              return this.__PROXY__.importObjectP(...args);
            
        };
        
        // function 
        RFileImporter.prototype.importObject = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.importObject");
          
              return this.__PROXY__.importObject(...args);
            
        };
        
        // function 
        RFileImporter.prototype.setCurrentBlockId = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.setCurrentBlockId");
          
              return this.__PROXY__.setCurrentBlockId(...args);
            
        };
        
        // function 
        RFileImporter.prototype.getCurrentBlockId = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.getCurrentBlockId");
          
              return this.__PROXY__.getCurrentBlockId(...args);
            
        };
        
        // function 
        RFileImporter.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
        
        // function 
        RFileImporter.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
        
        // function 
        RFileImporter.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.setKnownVariable");
          
              return this.__PROXY__.setKnownVariable(...args);
            
        };
        
        // function 
        RFileImporter.prototype.importFile = function(...args) 
          
        {
          //print("JS: RFileImporter.prototype.importFile");
          
              return this.__PROXY__.importFile(...args);
            
        };
        

      // static functions:
      RFileImporter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFileImporter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFileImporter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileImporter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileImporter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFileImporter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      