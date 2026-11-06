
      // auto generated
      //var self;

      // class constructor:
      function ROrthoGrid() {
        

        // should be ROrthoGrid_BaseJs.call(this, engine):
        //ROrthoGrid.prototype = new ROrthoGrid_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_ROrthoGrid.getIdStatic()))) {

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
            qWarning("ROrthoGrid.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new ROrthoGrid_Wrapper(
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

      

        //copyProperties(this, wrapper, ROrthoGrid);
  }

  
  else {
    
        print("ROrthoGrid(): wrong number / type of arguments");
      
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

      //ROrthoGrid.prototype = new ROrthoGrid_BaseJs(engine);
      //ROrthoGrid.prototype = new ROrthoGrid_Wrapper(engine);
      ROrthoGrid.prototype = new Object();


      ROrthoGrid.prototype.toString = function() {
          //return "ROrthoGrid [JS] [0x" + this.getAddress().toString(16) + "]";
          return "ROrthoGrid [JS]";
        };
      ROrthoGrid.getObjectType = function() {
        return RJSType_ROrthoGrid.getIdStatic();
      };

      ROrthoGrid.prototype.getObjectType = function() {
        return RJSType_ROrthoGrid.getIdStatic();
      };

      ROrthoGrid.prototype.isOfObjectType = function(t) {
        if (t===RJSType_ROrthoGrid.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RGrid.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        ROrthoGrid.prototype.getViewportNumber = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.getViewportNumber");
          
              return this.__PROXY__.getViewportNumber(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.getDocument = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.setVisible = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.isVisible = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.clearCache = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.clearCache");
          
              return this.__PROXY__.clearCache(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.snapToGrid = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.snapToGrid");
          
              return this.__PROXY__.snapToGrid(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.update = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.paint = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.paint");
          
              return this.__PROXY__.paint(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.paintMetaGrid = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.paintMetaGrid");
          
              return this.__PROXY__.paintMetaGrid(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.paintGridLines = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.paintGridLines");
          
              return this.__PROXY__.paintGridLines(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.paintGridPoints = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.paintGridPoints");
          
              return this.__PROXY__.paintGridPoints(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.paintCursor = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.paintCursor");
          
              return this.__PROXY__.paintCursor(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.paintRuler = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.paintRuler");
          
              return this.__PROXY__.paintRuler(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.getInfoText = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.getInfoText");
          
              return this.__PROXY__.getInfoText(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.getIdealSpacing = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.getIdealSpacing");
          
              return this.__PROXY__.getIdealSpacing(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.isIsometric = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.isIsometric");
          
              return this.__PROXY__.isIsometric(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.setIsometric = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.setIsometric");
          
              return this.__PROXY__.setIsometric(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.getProjection = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.getProjection");
          
              return this.__PROXY__.getProjection(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.setProjection = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.setProjection");
          
              return this.__PROXY__.setProjection(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.getIdealGridSpacing = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.getIdealGridSpacing");
          
              return this.__PROXY__.getIdealGridSpacing(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.isFractionalFormat = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.isFractionalFormat");
          
              return this.__PROXY__.isFractionalFormat(...args);
            
        };
    
        // function 
        ROrthoGrid.prototype.inchAutoscale = function(...args) 
          
        {
          //print("JS: ROrthoGrid.prototype.inchAutoscale");
          
              return this.__PROXY__.inchAutoscale(...args);
            
        };
    

      // static functions:
      

        // static function 
        ROrthoGrid.getIdealGridSpacing = function() 
          
        {
          //print("JS: ROrthoGrid.getIdealGridSpacing");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return ROrthoGrid_WrapperSingletonInstance.getIdealGridSpacing(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, ROrthoGrid);
  }

  
  else {
    
        print("ROrthoGrid.getIdealGridSpacing(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        ROrthoGrid.isFractionalFormat = function() 
          
        {
          //print("JS: ROrthoGrid.isFractionalFormat");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return ROrthoGrid_WrapperSingletonInstance.isFractionalFormat(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, ROrthoGrid);
  }

  
  else {
    
        print("ROrthoGrid.isFractionalFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        ROrthoGrid.inchAutoscale = function() 
          
        {
          //print("JS: ROrthoGrid.inchAutoscale");
          
        };
      ROrthoGrid.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      ROrthoGrid.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      ROrthoGrid.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //ROrthoGrid.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //ROrthoGrid.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      ROrthoGrid.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      