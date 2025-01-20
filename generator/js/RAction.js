
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
              
                  copyProperties(this, wrapper, RAction);
                
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
      RAction.prototype.isOverride = function() 
        
      {
        //print("JS: RAction.prototype.isOverride");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isOverride(
                // call highest level JS implementation:
                //return this.isOverrideBase(
                
                    return this.isOverrideSuper(
                  
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.isOverride(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.getDocumentSuper(
                  
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
                
                    return this.getDocumentInterfaceSuper(
                  
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.getDocumentInterface(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.setDocumentInterfaceSuper(
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
      RAction.prototype.entityPickEventPreview = function() 
        
      {
        //print("JS: RAction.prototype.entityPickEventPreview");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.entityPickEventPreview(
                // call highest level JS implementation:
                //return this.entityPickEventPreviewBase(
                
                    return this.entityPickEventPreviewSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RAction);
  }

  
  else {
    
        print("RAction.entityPickEventPreview(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      