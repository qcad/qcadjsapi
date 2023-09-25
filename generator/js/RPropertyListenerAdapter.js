
      // auto generated
      //var self;

      // class constructor:
      function RPropertyListenerAdapter() {
        

        // should be RPropertyListenerAdapter_BaseJs.call(this, engine):
        //RPropertyListenerAdapter.prototype = new RPropertyListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPropertyListenerAdapter);
            //}
          }
          else {
            qWarning("RPropertyListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPropertyListenerAdapter.js: No constructor found for class RPropertyListenerAdapter");
            
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
            
    this["updatedFromDocument(RDocument*,bool,RS::EntityType,bool,bool)"] = Object.getPrototypeOf(this).updatedFromDocument;
  
    this["updatedFromObject(RObject*,RDocument*)"] = Object.getPrototypeOf(this).updatedFromObject;
  
          }
        }
      }

      //RPropertyListenerAdapter.prototype = new RPropertyListenerAdapter_BaseJs(engine);
      //RPropertyListenerAdapter.prototype = new RPropertyListenerAdapter_Wrapper(engine);
      RPropertyListenerAdapter.prototype = new Object();

      RPropertyListenerAdapter.prototype.toString = function() {
          //return "RPropertyListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyListenerAdapter [JS]";
        };
      RPropertyListenerAdapter.getObjectType = function() {
        return RJSType_RPropertyListenerAdapter.getIdStatic();
      };

      RPropertyListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RPropertyListenerAdapter.getIdStatic();
      };

      RPropertyListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPropertyListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPropertyListenerAdapter.prototype.updateFromDocument = function() 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.updateFromDocument");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFromDocument(
                // call highest level JS implementation:
                //return this.updateFromDocumentBase(
                return this.updateFromDocumentSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPropertyListenerAdapter);
  }

  
  else {
    
        print("RPropertyListenerAdapter.updateFromDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RPropertyListenerAdapter.prototype.updateFromObject = function() 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.updateFromObject");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFromObject(
                // call highest level JS implementation:
                //return this.updateFromObjectBase(
                return this.updateFromObjectSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPropertyListenerAdapter);
  }

  
  else {
    
        print("RPropertyListenerAdapter.updateFromObject(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RPropertyListenerAdapter.prototype.clearEditor = function() 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.clearEditor");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.clearEditor(
                // call highest level JS implementation:
                //return this.clearEditorBase(
                return this.clearEditorSuper(
                  
                );
              

        //copyProperties(this, wrapper, RPropertyListenerAdapter);
  }

  
  else {
    
        print("RPropertyListenerAdapter.clearEditor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    