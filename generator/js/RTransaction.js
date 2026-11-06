
      // auto generated
      //var self;

      // class constructor:
      function RTransaction() {
        

        // should be RTransaction_BaseJs.call(this, engine):
        //RTransaction.prototype = new RTransaction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransaction.getIdStatic()))) {

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
            qWarning("RTransaction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RTransaction_Wrapper(
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

      

        //copyProperties(this, wrapper, RTransaction);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTransaction_Wrapper(
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

      

        //copyProperties(this, wrapper, RTransaction);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransaction_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransaction);
  }

  
  else {
    
        print("RTransaction(): wrong number / type of arguments");
      
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

      //RTransaction.prototype = new RTransaction_BaseJs(engine);
      //RTransaction.prototype = new RTransaction_Wrapper(engine);
      RTransaction.prototype = new Object();


      RTransaction.prototype.toString = function() {
          //return "RTransaction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransaction [JS]";
        };
      RTransaction.getObjectType = function() {
        return RJSType_RTransaction.getIdStatic();
      };

      RTransaction.prototype.getObjectType = function() {
        return RJSType_RTransaction.getIdStatic();
      };

      RTransaction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransaction.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTransaction.Generic = RTransaction_Wrapper.Generic;
RTransaction.CurrentLayerChange = RTransaction_Wrapper.CurrentLayerChange;
RTransaction.CurrentLayerSelectionChange = RTransaction_Wrapper.CurrentLayerSelectionChange;
RTransaction.LayerLockStatusChange = RTransaction_Wrapper.LayerLockStatusChange;
RTransaction.LayerVisibilityStatusChange = RTransaction_Wrapper.LayerVisibilityStatusChange;
RTransaction.SaveWorkingSet = RTransaction_Wrapper.SaveWorkingSet;
RTransaction.ChangeDocumentSetting = RTransaction_Wrapper.ChangeDocumentSetting;
RTransaction.Undo = RTransaction_Wrapper.Undo;
RTransaction.Redo = RTransaction_Wrapper.Redo;
RTransaction.LayerCollapseStatusChange = RTransaction_Wrapper.LayerCollapseStatusChange;


      // functions:
      
        // function 
        RTransaction.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RTransaction.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RTransaction.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RTransaction.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RTransaction.prototype.setExistingBlockDetectionDisabled = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setExistingBlockDetectionDisabled");
          
              return this.__PROXY__.setExistingBlockDetectionDisabled(...args);
            
        };
    
        // function 
        RTransaction.prototype.setExistingLayerDetectionDisabled = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setExistingLayerDetectionDisabled");
          
              return this.__PROXY__.setExistingLayerDetectionDisabled(...args);
            
        };
    
        // function 
        RTransaction.prototype.setExistingLinetypeDetectionDisabled = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setExistingLinetypeDetectionDisabled");
          
              return this.__PROXY__.setExistingLinetypeDetectionDisabled(...args);
            
        };
    
        // function 
        RTransaction.prototype.setBlockRecursionDetectionDisabled = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setBlockRecursionDetectionDisabled");
          
              return this.__PROXY__.setBlockRecursionDetectionDisabled(...args);
            
        };
    
        // function 
        RTransaction.prototype.setKeepHandles = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setKeepHandles");
          
              return this.__PROXY__.setKeepHandles(...args);
            
        };
    
        // function 
        RTransaction.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RTransaction.prototype.isUndoing = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.isUndoing");
          
              return this.__PROXY__.isUndoing(...args);
            
        };
    
        // function 
        RTransaction.prototype.isRedoing = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.isRedoing");
          
              return this.__PROXY__.isRedoing(...args);
            
        };
    
        // function 
        RTransaction.prototype.isUndoable = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.isUndoable");
          
              return this.__PROXY__.isUndoable(...args);
            
        };
    
        // function 
        RTransaction.prototype.isFailed = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.isFailed");
          
              return this.__PROXY__.isFailed(...args);
            
        };
    
        // function 
        RTransaction.prototype.redo = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
    
        // function 
        RTransaction.prototype.undo = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
    
        // function 
        RTransaction.prototype.end = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.end");
          
              return this.__PROXY__.end(...args);
            
        };
    
        // function 
        RTransaction.prototype.updateAffectedBlockReferences = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.updateAffectedBlockReferences");
          
              return this.__PROXY__.updateAffectedBlockReferences(...args);
            
        };
    
        // function 
        RTransaction.prototype.setId = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setId");
          
              return this.__PROXY__.setId(...args);
            
        };
    
        // function 
        RTransaction.prototype.getId = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getId");
          
              return this.__PROXY__.getId(...args);
            
        };
    
        // function 
        RTransaction.prototype.setGroup = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setGroup");
          
              return this.__PROXY__.setGroup(...args);
            
        };
    
        // function 
        RTransaction.prototype.getGroup = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getGroup");
          
              return this.__PROXY__.getGroup(...args);
            
        };
    
        // function 
        RTransaction.prototype.getText = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RTransaction.prototype.overwriteBlock = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.overwriteBlock");
          
              return this.__PROXY__.overwriteBlock(...args);
            
        };
    
        // function 
        RTransaction.prototype.addObject = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.addObject");
          
              return this.__PROXY__.addObject(...args);
            
        };
    
        // function 
        RTransaction.prototype.addAffectedObject = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.addAffectedObject");
          
              return this.__PROXY__.addAffectedObject(...args);
            
        };
    
        // function 
        RTransaction.prototype.addAffectedObjects = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.addAffectedObjects");
          
              return this.__PROXY__.addAffectedObjects(...args);
            
        };
    
        // function 
        RTransaction.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RTransaction.prototype.getAffectedObjects = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getAffectedObjects");
          
              return this.__PROXY__.getAffectedObjects(...args);
            
        };
    
        // function 
        RTransaction.prototype.getStatusChanges = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getStatusChanges");
          
              return this.__PROXY__.getStatusChanges(...args);
            
        };
    
        // function 
        RTransaction.prototype.hasStatusChange = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.hasStatusChange");
          
              return this.__PROXY__.hasStatusChange(...args);
            
        };
    
        // function 
        RTransaction.prototype.getPropertyChanges = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getPropertyChanges");
          
              return this.__PROXY__.getPropertyChanges(...args);
            
        };
    
        // function 
        RTransaction.prototype.getNewObjectId = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getNewObjectId");
          
              return this.__PROXY__.getNewObjectId(...args);
            
        };
    
        // function 
        RTransaction.prototype.hasOnlyChanges = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.hasOnlyChanges");
          
              return this.__PROXY__.hasOnlyChanges(...args);
            
        };
    
        // function 
        RTransaction.prototype.fail = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.fail");
          
              return this.__PROXY__.fail(...args);
            
        };
    
        // function 
        RTransaction.prototype.endCycle = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.endCycle");
          
              return this.__PROXY__.endCycle(...args);
            
        };
    
        // function 
        RTransaction.prototype.isPreview = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.isPreview");
          
              return this.__PROXY__.isPreview(...args);
            
        };
    
        // function 
        RTransaction.prototype.setTypes = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setTypes");
          
              return this.__PROXY__.setTypes(...args);
            
        };
    
        // function 
        RTransaction.prototype.getTypes = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.getTypes");
          
              return this.__PROXY__.getTypes(...args);
            
        };
    
        // function 
        RTransaction.prototype.setType = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.setType");
          
              return this.__PROXY__.setType(...args);
            
        };
    
        // function 
        RTransaction.prototype.isType = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.isType");
          
              return this.__PROXY__.isType(...args);
            
        };
    
        // function 
        RTransaction.prototype.addPropertyChange = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.addPropertyChange");
          
              return this.__PROXY__.addPropertyChange(...args);
            
        };
    
        // function 
        RTransaction.prototype.commit = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.commit");
          
              return this.__PROXY__.commit(...args);
            
        };
    
        // function 
        RTransaction.prototype.rollback = function(...args) 
          
        {
          //print("JS: RTransaction.prototype.rollback");
          
              return this.__PROXY__.rollback(...args);
            
        };
    

      // static functions:
      RTransaction.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RTransaction.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RTransaction.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTransaction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransaction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTransaction.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      