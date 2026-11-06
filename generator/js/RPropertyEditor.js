
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
        RPropertyEditor.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.findChild = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.children = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.setParent = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.property = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.parent = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getInstance = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getInstance");
          
              return this.__PROXY__.getInstance(...args);
            
        };
    
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
                
                    return this.__PROXY__.updateFromDocumentSuper(
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
                
                    return this.__PROXY__.updateFromDocumentNowSuper(
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
                
                    return this.__PROXY__.updateFromObjectSuper(
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
                
                    return this.__PROXY__.clearEditorSuper(
                  
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.clearEditor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RPropertyEditor.prototype.getFixedCustomPropertyNames = function() 
        
      {
        //print("JS: RPropertyEditor.prototype.getFixedCustomPropertyNames");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getFixedCustomPropertyNames(
                // call highest level JS implementation:
                //return this.getFixedCustomPropertyNamesBase(
                
                    return this.__PROXY__.getFixedCustomPropertyNamesSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.getFixedCustomPropertyNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RPropertyEditor.prototype.updateLayers = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.updateLayers");
          
              return this.__PROXY__.updateLayers(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.setCurrentLayer = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.setCurrentLayer");
          
              return this.__PROXY__.setCurrentLayer(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.clearLayers = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.clearLayers");
          
              return this.__PROXY__.clearLayers(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.propertyChanged = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.propertyChanged");
          
              return this.__PROXY__.propertyChanged(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.listPropertyChanged = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.listPropertyChanged");
          
              return this.__PROXY__.listPropertyChanged(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getGroupTitles = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getGroupTitles");
          
              return this.__PROXY__.getGroupTitles(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getPropertyTitles = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getPropertyTitles");
          
              return this.__PROXY__.getPropertyTitles(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getPropertyValue = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getPropertyValue");
          
              return this.__PROXY__.getPropertyValue(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getPropertyAttributes = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getPropertyAttributes");
          
              return this.__PROXY__.getPropertyAttributes(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getCustomPropertyAttributes = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getCustomPropertyAttributes");
          
              return this.__PROXY__.getCustomPropertyAttributes(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getTypes = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getTypes");
          
              return this.__PROXY__.getTypes(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getTypeCount = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getTypeCount");
          
              return this.__PROXY__.getTypeCount(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.setEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.setEntityTypeFilter");
          
              return this.__PROXY__.setEntityTypeFilter(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.getAppProperties = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.getAppProperties");
          
              return this.__PROXY__.getAppProperties(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.checkType = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.checkType");
          
              return this.__PROXY__.checkType(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.makeReadOnly = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.makeReadOnly");
          
              return this.__PROXY__.makeReadOnly(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.updateEditor = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.updateEditor");
          
              return this.__PROXY__.updateEditorSuper(...args);
            
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
                
                    return this.__PROXY__.updateGuiSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPropertyEditor);
  }

  
  else {
    
        print("RPropertyEditor.updateGui(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RPropertyEditor.prototype.updateProperty = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.updateProperty");
          
              return this.__PROXY__.updatePropertySuper(...args);
            
        };
    
        // function 
        RPropertyEditor.prototype.showCustomAppProperties = function(...args) 
          
        {
          //print("JS: RPropertyEditor.prototype.showCustomAppProperties");
          
              return this.__PROXY__.showCustomAppPropertiesSuper(...args);
            
        };
    

      // static functions:
      

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
      
          Object.defineProperty(RPropertyEditor.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        RPropertyEditor.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPropertyEditor.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPropertyEditor.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      RPropertyEditor.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      