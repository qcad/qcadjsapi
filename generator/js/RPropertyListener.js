
      // auto generated
      //var self;

      // class constructor:
      function RPropertyListener() {
        

        // should be RPropertyListener_BaseJs.call(this, engine):
        //RPropertyListener.prototype = new RPropertyListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPropertyListener);
                
            //}
          }
          else {
            qWarning("RPropertyListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPropertyListener.js: No constructor found for class RPropertyListener");
            
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

      //RPropertyListener.prototype = new RPropertyListener_BaseJs(engine);
      //RPropertyListener.prototype = new RPropertyListener_Wrapper(engine);
      RPropertyListener.prototype = new Object();

      RPropertyListener.prototype.toString = function() {
          //return "RPropertyListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyListener [JS]";
        };
      RPropertyListener.getObjectType = function() {
        return RJSType_RPropertyListener.getIdStatic();
      };

      RPropertyListener.prototype.getObjectType = function() {
        return RJSType_RPropertyListener.getIdStatic();
      };

      RPropertyListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyListener.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RPropertyListener.prototype.updateFromDocument = function() 
        
      {
        //print("JS: RPropertyListener.prototype.updateFromDocument");
        
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
              

        //copyProperties(this, wrapper, RPropertyListener);
  }

  
  else {
    
        print("RPropertyListener.updateFromDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RPropertyListener.prototype.updateFromObject = function() 
        
      {
        //print("JS: RPropertyListener.prototype.updateFromObject");
        
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
              

        //copyProperties(this, wrapper, RPropertyListener);
  }

  
  else {
    
        print("RPropertyListener.updateFromObject(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RPropertyListener.prototype.clearEditor = function() 
        
      {
        //print("JS: RPropertyListener.prototype.clearEditor");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.clearEditor(
                // call highest level JS implementation:
                //return this.clearEditorBase(
                
                    return this.clearEditorSuper(
                  
                );
              

        //copyProperties(this, wrapper, RPropertyListener);
  }

  
  else {
    
        print("RPropertyListener.clearEditor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      