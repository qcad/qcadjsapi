
      // auto generated
      //var self;

      // class constructor:
      function RActionAdapter() {
        

        // should be RActionAdapter_BaseJs.call(this, engine):
        //RActionAdapter.prototype = new RActionAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RActionAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RActionAdapter);
                
            //}
          }
          else {
            qWarning("RActionAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RActionAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RActionAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter(): wrong number / type of arguments");
      
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

      //RActionAdapter.prototype = new RActionAdapter_BaseJs(engine);
      //RActionAdapter.prototype = new RActionAdapter_Wrapper(engine);
      RActionAdapter.prototype = new Object();

      RActionAdapter.prototype.toString = function() {
          //return "RActionAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RActionAdapter [JS]";
        };
      RActionAdapter.getObjectType = function() {
        return RJSType_RActionAdapter.getIdStatic();
      };

      RActionAdapter.prototype.getObjectType = function() {
        return RJSType_RActionAdapter.getIdStatic();
      };

      RActionAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RActionAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RAction.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ClickMode
RActionAdapter.PickCoordinate = RActionAdapter_Wrapper.PickCoordinate;
RActionAdapter.PickCoordinateNoSnap = RActionAdapter_Wrapper.PickCoordinateNoSnap;
RActionAdapter.PickEntity = RActionAdapter_Wrapper.PickEntity;
RActionAdapter.PickingDisabled = RActionAdapter_Wrapper.PickingDisabled;


      // functions:
      
      // function 
      RActionAdapter.prototype.isOverride = function() 
        
      {
        //print("JS: RActionAdapter.prototype.isOverride");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isOverride(
                // call highest level JS implementation:
                //return this.isOverrideBase(
                
                    return this.isOverrideSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.isOverride(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.getDocument = function() 
        
      {
        //print("JS: RActionAdapter.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.getDocumentInterface = function() 
        
      {
        //print("JS: RActionAdapter.prototype.getDocumentInterface");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocumentInterface(
                // call highest level JS implementation:
                //return this.getDocumentInterfaceBase(
                
                    return this.getDocumentInterfaceSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.getDocumentInterface(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.setDocumentInterface = function() 
        
      {
        //print("JS: RActionAdapter.prototype.setDocumentInterface");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setDocumentInterface(
                // call highest level JS implementation:
                //return this.setDocumentInterfaceBase(
                
                    return this.setDocumentInterfaceSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.setDocumentInterface(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.beginEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.beginEvent");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.beginEvent(
                // call highest level JS implementation:
                //return this.beginEventBase(
                
                    return this.beginEventSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.beginEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.setGraphicsView = function() 
        
      {
        //print("JS: RActionAdapter.prototype.setGraphicsView");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setGraphicsView(
                // call highest level JS implementation:
                //return this.setGraphicsViewBase(
                
                    return this.setGraphicsViewSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.setGraphicsView(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.finishEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.finishEvent");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.finishEvent(
                // call highest level JS implementation:
                //return this.finishEventBase(
                
                    return this.finishEventSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.finishEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.enterEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.enterEvent");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.enterEvent(
                // call highest level JS implementation:
                //return this.enterEventBase(
                
                    return this.enterEventSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.enterEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.suspendEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.suspendEvent");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.suspendEvent(
                // call highest level JS implementation:
                //return this.suspendEventBase(
                
                    return this.suspendEventSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.suspendEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.resumeEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.resumeEvent");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.resumeEvent(
                // call highest level JS implementation:
                //return this.resumeEventBase(
                
                    return this.resumeEventSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.resumeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.escapeEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.escapeEvent");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.escapeEvent(
                // call highest level JS implementation:
                //return this.escapeEventBase(
                
                    return this.escapeEventSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.escapeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.keyPressEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.keyPressEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.keyPressEvent(
                // call highest level JS implementation:
                //return this.keyPressEventBase(
                
                    return this.keyPressEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.keyPressEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.keyReleaseEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.keyReleaseEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.keyReleaseEvent(
                // call highest level JS implementation:
                //return this.keyReleaseEventBase(
                
                    return this.keyReleaseEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.keyReleaseEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.mousePressEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.mousePressEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mousePressEvent(
                // call highest level JS implementation:
                //return this.mousePressEventBase(
                
                    return this.mousePressEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.mousePressEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.mouseMoveEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.mouseMoveEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mouseMoveEvent(
                // call highest level JS implementation:
                //return this.mouseMoveEventBase(
                
                    return this.mouseMoveEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.mouseMoveEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.mouseReleaseEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.mouseReleaseEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mouseReleaseEvent(
                // call highest level JS implementation:
                //return this.mouseReleaseEventBase(
                
                    return this.mouseReleaseEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.mouseReleaseEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.mouseDoubleClickEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.mouseDoubleClickEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mouseDoubleClickEvent(
                // call highest level JS implementation:
                //return this.mouseDoubleClickEventBase(
                
                    return this.mouseDoubleClickEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.mouseDoubleClickEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.wheelEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.wheelEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.wheelEvent(
                // call highest level JS implementation:
                //return this.wheelEventBase(
                
                    return this.wheelEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.wheelEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.tabletEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.tabletEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.tabletEvent(
                // call highest level JS implementation:
                //return this.tabletEventBase(
                
                    return this.tabletEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.tabletEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.swipeGestureEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.swipeGestureEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.swipeGestureEvent(
                // call highest level JS implementation:
                //return this.swipeGestureEventBase(
                
                    return this.swipeGestureEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.swipeGestureEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.panGestureEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.panGestureEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.panGestureEvent(
                // call highest level JS implementation:
                //return this.panGestureEventBase(
                
                    return this.panGestureEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.panGestureEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.pinchGestureEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.pinchGestureEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.pinchGestureEvent(
                // call highest level JS implementation:
                //return this.pinchGestureEventBase(
                
                    return this.pinchGestureEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.pinchGestureEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.commandEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.commandEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.commandEvent(
                // call highest level JS implementation:
                //return this.commandEventBase(
                
                    return this.commandEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.commandEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.commandEventPreview = function() 
        
      {
        //print("JS: RActionAdapter.prototype.commandEventPreview");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.commandEventPreview(
                // call highest level JS implementation:
                //return this.commandEventPreviewBase(
                
                    return this.commandEventPreviewSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.commandEventPreview(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.coordinateEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.coordinateEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.coordinateEvent(
                // call highest level JS implementation:
                //return this.coordinateEventBase(
                
                    return this.coordinateEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.coordinateEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.coordinateEventPreview = function() 
        
      {
        //print("JS: RActionAdapter.prototype.coordinateEventPreview");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.coordinateEventPreview(
                // call highest level JS implementation:
                //return this.coordinateEventPreviewBase(
                
                    return this.coordinateEventPreviewSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.coordinateEventPreview(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.entityPickEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.entityPickEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.entityPickEvent(
                // call highest level JS implementation:
                //return this.entityPickEventBase(
                
                    return this.entityPickEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.entityPickEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.entityPickEventPreview = function() 
        
      {
        //print("JS: RActionAdapter.prototype.entityPickEventPreview");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.entityPickEventPreview(
                // call highest level JS implementation:
                //return this.entityPickEventPreviewBase(
                
                    return this.entityPickEventPreviewSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.entityPickEventPreview(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.propertyChangeEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.propertyChangeEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.propertyChangeEvent(
                // call highest level JS implementation:
                //return this.propertyChangeEventBase(
                
                    return this.propertyChangeEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.propertyChangeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.zoomChangeEvent = function() 
        
      {
        //print("JS: RActionAdapter.prototype.zoomChangeEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.zoomChangeEvent(
                // call highest level JS implementation:
                //return this.zoomChangeEventBase(
                
                    return this.zoomChangeEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.zoomChangeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.updatePreview = function() 
        
      {
        //print("JS: RActionAdapter.prototype.updatePreview");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updatePreview(
                // call highest level JS implementation:
                //return this.updatePreviewBase(
                
                    return this.updatePreviewSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.updatePreview(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RActionAdapter.prototype.applyOperation = function() 
        
      {
        //print("JS: RActionAdapter.prototype.applyOperation");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.applyOperation(
                // call highest level JS implementation:
                //return this.applyOperationBase(
                
                    return this.applyOperationSuper(
                  
                );
              

        //copyProperties(this, wrapper, RActionAdapter);
  }

  
  else {
    
        print("RActionAdapter.applyOperation(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RActionAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RActionAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      