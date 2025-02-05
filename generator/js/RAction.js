
      // auto generated
      //var self;

      // class constructor:
      function RAction() {
        

        // should be RAction_BaseJs.call(this, engine):
        //RAction.prototype = new RAction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAction.getIdStatic()))) {

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
            qWarning("RAction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RAction.js: No constructor found for class RAction");
            
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

      //RAction.prototype = new RAction_BaseJs(engine);
      //RAction.prototype = new RAction_Wrapper(engine);
      RAction.prototype = new Object();

      RAction.prototype.toString = function() {
          //return "RAction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAction [JS]";
        };
      RAction.getObjectType = function() {
        return RJSType_RAction.getIdStatic();
      };

      RAction.prototype.getObjectType = function() {
        return RJSType_RAction.getIdStatic();
      };

      RAction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAction.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ClickMode
RAction.PickCoordinate = RAction_Wrapper.PickCoordinate;
RAction.PickCoordinateNoSnap = RAction_Wrapper.PickCoordinateNoSnap;
RAction.PickEntity = RAction_Wrapper.PickEntity;
RAction.PickingDisabled = RAction_Wrapper.PickingDisabled;


      // functions:
      
        // function 
        RAction.prototype.terminate = function(...args) 
          
        {
          //print("JS: RAction.prototype.terminate");
          return this.__PROXY__.terminate(...args);
        };
    
        // function 
        RAction.prototype.isTerminated = function(...args) 
          
        {
          //print("JS: RAction.prototype.isTerminated");
          return this.__PROXY__.isTerminated(...args);
        };
    
        // function 
        RAction.prototype.setOverride = function(...args) 
          
        {
          //print("JS: RAction.prototype.setOverride");
          return this.__PROXY__.setOverride(...args);
        };
    
      // function 
      RAction.prototype.isOverride = function() 
        
      {
        //print("JS: RAction.prototype.isOverride");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isOverride(
                // call highest level JS implementation:
                //return this.isOverrideBase(
                
                    return this.__PROXY__.isOverrideSuper(
                  
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.isOverride(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RAction.prototype.setNoState = function(...args) 
          
        {
          //print("JS: RAction.prototype.setNoState");
          return this.__PROXY__.setNoState(...args);
        };
    
        // function 
        RAction.prototype.hasNoState = function(...args) 
          
        {
          //print("JS: RAction.prototype.hasNoState");
          return this.__PROXY__.hasNoState(...args);
        };
    
        // function 
        RAction.prototype.setUniqueGroup = function(...args) 
          
        {
          //print("JS: RAction.prototype.setUniqueGroup");
          return this.__PROXY__.setUniqueGroup(...args);
        };
    
        // function 
        RAction.prototype.getUniqueGroup = function(...args) 
          
        {
          //print("JS: RAction.prototype.getUniqueGroup");
          return this.__PROXY__.getUniqueGroup(...args);
        };
    
        // function 
        RAction.prototype.setOverrideBase = function(...args) 
          
        {
          //print("JS: RAction.prototype.setOverrideBase");
          return this.__PROXY__.setOverrideBase(...args);
        };
    
        // function 
        RAction.prototype.getOverrideBase = function(...args) 
          
        {
          //print("JS: RAction.prototype.getOverrideBase");
          return this.__PROXY__.getOverrideBase(...args);
        };
    
        // function 
        RAction.prototype.getGuiAction = function(...args) 
          
        {
          //print("JS: RAction.prototype.getGuiAction");
          return this.__PROXY__.getGuiAction(...args);
        };
    
        // function 
        RAction.prototype.setGuiAction = function(...args) 
          
        {
          //print("JS: RAction.prototype.setGuiAction");
          return this.__PROXY__.setGuiAction(...args);
        };
    
        // function 
        RAction.prototype.getGraphicsScenes = function(...args) 
          
        {
          //print("JS: RAction.prototype.getGraphicsScenes");
          return this.__PROXY__.getGraphicsScenes(...args);
        };
    
      // function 
      RAction.prototype.getDocument = function() 
        
      {
        //print("JS: RAction.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.__PROXY__.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RAction.prototype.getDocumentInterface = function() 
        
      {
        //print("JS: RAction.prototype.getDocumentInterface");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocumentInterface(
                // call highest level JS implementation:
                //return this.getDocumentInterfaceBase(
                
                    return this.__PROXY__.getDocumentInterfaceSuper(
                  
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.getDocumentInterface(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RAction.prototype.getStorage = function(...args) 
          
        {
          //print("JS: RAction.prototype.getStorage");
          return this.__PROXY__.getStorage(...args);
        };
    
      // function 
      RAction.prototype.setDocumentInterface = function() 
        
      {
        //print("JS: RAction.prototype.setDocumentInterface");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setDocumentInterface(
                // call highest level JS implementation:
                //return this.setDocumentInterfaceBase(
                
                    return this.__PROXY__.setDocumentInterfaceSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.setDocumentInterface(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RAction.prototype.setClickMode = function(...args) 
          
        {
          //print("JS: RAction.prototype.setClickMode");
          return this.__PROXY__.setClickMode(...args);
        };
    
        // function 
        RAction.prototype.getClickMode = function(...args) 
          
        {
          //print("JS: RAction.prototype.getClickMode");
          return this.__PROXY__.getClickMode(...args);
        };
    
        // function 
        RAction.prototype.beginEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.beginEvent");
          return this.__PROXY__.beginEvent(...args);
        };
    
        // function 
        RAction.prototype.setGraphicsView = function(...args) 
          
        {
          //print("JS: RAction.prototype.setGraphicsView");
          return this.__PROXY__.setGraphicsView(...args);
        };
    
        // function 
        RAction.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RAction.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.enterEvent");
          return this.__PROXY__.enterEvent(...args);
        };
    
        // function 
        RAction.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RAction.prototype.resumeEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.resumeEvent");
          return this.__PROXY__.resumeEvent(...args);
        };
    
        // function 
        RAction.prototype.escapeEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.escapeEvent");
          return this.__PROXY__.escapeEvent(...args);
        };
    
        // function 
        RAction.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.keyPressEvent");
          return this.__PROXY__.keyPressEvent(...args);
        };
    
        // function 
        RAction.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.keyReleaseEvent");
          return this.__PROXY__.keyReleaseEvent(...args);
        };
    
        // function 
        RAction.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.mousePressEvent");
          return this.__PROXY__.mousePressEvent(...args);
        };
    
        // function 
        RAction.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.mouseMoveEvent");
          return this.__PROXY__.mouseMoveEvent(...args);
        };
    
        // function 
        RAction.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.mouseReleaseEvent");
          return this.__PROXY__.mouseReleaseEvent(...args);
        };
    
        // function 
        RAction.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.mouseDoubleClickEvent");
          return this.__PROXY__.mouseDoubleClickEvent(...args);
        };
    
        // function 
        RAction.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.wheelEvent");
          return this.__PROXY__.wheelEvent(...args);
        };
    
        // function 
        RAction.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.tabletEvent");
          return this.__PROXY__.tabletEvent(...args);
        };
    
        // function 
        RAction.prototype.swipeGestureEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.swipeGestureEvent");
          return this.__PROXY__.swipeGestureEvent(...args);
        };
    
        // function 
        RAction.prototype.panGestureEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.panGestureEvent");
          return this.__PROXY__.panGestureEvent(...args);
        };
    
        // function 
        RAction.prototype.pinchGestureEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.pinchGestureEvent");
          return this.__PROXY__.pinchGestureEvent(...args);
        };
    
        // function 
        RAction.prototype.commandEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.commandEvent");
          return this.__PROXY__.commandEvent(...args);
        };
    
        // function 
        RAction.prototype.commandEventPreview = function(...args) 
          
        {
          //print("JS: RAction.prototype.commandEventPreview");
          return this.__PROXY__.commandEventPreview(...args);
        };
    
        // function 
        RAction.prototype.coordinateEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.coordinateEvent");
          return this.__PROXY__.coordinateEvent(...args);
        };
    
        // function 
        RAction.prototype.coordinateEventPreview = function(...args) 
          
        {
          //print("JS: RAction.prototype.coordinateEventPreview");
          return this.__PROXY__.coordinateEventPreview(...args);
        };
    
        // function 
        RAction.prototype.entityPickEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.entityPickEvent");
          return this.__PROXY__.entityPickEvent(...args);
        };
    
      // function 
      RAction.prototype.entityPickEventPreview = function() 
        
      {
        //print("JS: RAction.prototype.entityPickEventPreview");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.entityPickEventPreview(
                // call highest level JS implementation:
                //return this.entityPickEventPreviewBase(
                
                    return this.__PROXY__.entityPickEventPreviewSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.entityPickEventPreview(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RAction.prototype.propertyChangeEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.propertyChangeEvent");
          return this.__PROXY__.propertyChangeEvent(...args);
        };
    
        // function 
        RAction.prototype.zoomChangeEvent = function(...args) 
          
        {
          //print("JS: RAction.prototype.zoomChangeEvent");
          return this.__PROXY__.zoomChangeEvent(...args);
        };
    
        // function 
        RAction.prototype.updatePreview = function(...args) 
          
        {
          //print("JS: RAction.prototype.updatePreview");
          return this.__PROXY__.updatePreview(...args);
        };
    
        // function 
        RAction.prototype.applyOperation = function(...args) 
          
        {
          //print("JS: RAction.prototype.applyOperation");
          return this.__PROXY__.applyOperation(...args);
        };
    
        // function 
        RAction.prototype.snap = function(...args) 
          
        {
          //print("JS: RAction.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RAction.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      