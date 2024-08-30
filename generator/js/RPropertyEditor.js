
      // auto generated
      //var self;

      // class constructor:
      function RPropertyEditor() {
        

        // should be RPropertyEditor_BaseJs.call(this, engine):
        //RPropertyEditor.prototype = new RPropertyEditor_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyEditor.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPropertyEditor);
            //}
          }
          else {
            qWarning("RPropertyEditor.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPropertyEditor_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyEditor);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //RPropertyEditor.prototype = new RPropertyEditor_BaseJs(engine);
      //RPropertyEditor.prototype = new RPropertyEditor_Wrapper(engine);
      RPropertyEditor.prototype = new Object();

      RPropertyEditor.prototype.toString = function() {
          //return "RPropertyEditor [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyEditor [JS]";
        };
      RPropertyEditor.getObjectType = function() {
        return RJSType_RPropertyEditor.getIdStatic();
      };

      RPropertyEditor.prototype.getObjectType = function() {
        return RJSType_RPropertyEditor.getIdStatic();
      };

      RPropertyEditor.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyEditor.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPropertyListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RLayerListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPropertyEditor.prototype.updateFromDocument = function() 
          
        {
          //print("JS: RPropertyEditor.prototype.updateFromDocument");
          
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
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.updateFromDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RPropertyEditor.prototype.updateFromDocumentNow = function() 
          
        {
          //print("JS: RPropertyEditor.prototype.updateFromDocumentNow");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFromDocumentNow(
                // call highest level JS implementation:
                //return this.updateFromDocumentNowBase(
                return this.updateFromDocumentNowSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.updateFromDocumentNow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RPropertyEditor.prototype.updateFromObject = function() 
          
        {
          //print("JS: RPropertyEditor.prototype.updateFromObject");
          
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
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.updateFromObject(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RPropertyEditor.prototype.clearEditor = function() 
          
        {
          //print("JS: RPropertyEditor.prototype.clearEditor");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.clearEditor(
                // call highest level JS implementation:
                //return this.clearEditorBase(
                return this.clearEditorSuper(
                  
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.clearEditor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RPropertyEditor.prototype.updateGui = function() 
          
        {
          //print("JS: RPropertyEditor.prototype.updateGui");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateGui(
                // call highest level JS implementation:
                //return this.updateGuiBase(
                return this.updateGuiSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.updateGui(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        RPropertyEditor.tr = function() 
          
        {
          //print("JS: RPropertyEditor.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPropertyEditor_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPropertyEditor.getInstance = function() 
          
        {
          //print("JS: RPropertyEditor.getInstance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPropertyEditor_WrapperSingletonInstance.getInstance(
                  
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.getInstance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPropertyEditor.checkType = function() 
          
        {
          //print("JS: RPropertyEditor.checkType");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPropertyEditor_WrapperSingletonInstance.checkType(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.checkType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPropertyEditor.makeReadOnly = function() 
          
        {
          //print("JS: RPropertyEditor.makeReadOnly");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPropertyEditor_WrapperSingletonInstance.makeReadOnly(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.makeReadOnly(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyEditor.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyEditor.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    