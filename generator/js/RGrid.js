
      // auto generated
      //var self;

      // class constructor:
      function RGrid() {
        

        // should be RGrid_BaseJs.call(this, engine):
        //RGrid.prototype = new RGrid_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGrid.getIdStatic()))) {

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
            qWarning("RGrid.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RGrid.js: No constructor found for class RGrid");
            
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

      //RGrid.prototype = new RGrid_BaseJs(engine);
      //RGrid.prototype = new RGrid_Wrapper(engine);
      RGrid.prototype = new Object();


      RGrid.prototype.toString = function() {
          //return "RGrid [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGrid [JS]";
        };
      RGrid.getObjectType = function() {
        return RJSType_RGrid.getIdStatic();
      };

      RGrid.prototype.getObjectType = function() {
        return RJSType_RGrid.getIdStatic();
      };

      RGrid.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGrid.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RGrid.prototype.clearCache = function(...args) 
          
        {
          //print("JS: RGrid.prototype.clearCache");
          
              return this.__PROXY__.clearCache(...args);
            
        };
    
        // function 
        RGrid.prototype.snapToGrid = function(...args) 
          
        {
          //print("JS: RGrid.prototype.snapToGrid");
          
              return this.__PROXY__.snapToGrid(...args);
            
        };
    
        // function 
        RGrid.prototype.update = function(...args) 
          
        {
          //print("JS: RGrid.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RGrid.prototype.paint = function(...args) 
          
        {
          //print("JS: RGrid.prototype.paint");
          
              return this.__PROXY__.paint(...args);
            
        };
    
        // function 
        RGrid.prototype.paintMetaGrid = function(...args) 
          
        {
          //print("JS: RGrid.prototype.paintMetaGrid");
          
              return this.__PROXY__.paintMetaGrid(...args);
            
        };
    
        // function 
        RGrid.prototype.paintCursor = function(...args) 
          
        {
          //print("JS: RGrid.prototype.paintCursor");
          
              return this.__PROXY__.paintCursor(...args);
            
        };
    
        // function 
        RGrid.prototype.paintRuler = function(...args) 
          
        {
          //print("JS: RGrid.prototype.paintRuler");
          
              return this.__PROXY__.paintRuler(...args);
            
        };
    
        // function 
        RGrid.prototype.getInfoText = function(...args) 
          
        {
          //print("JS: RGrid.prototype.getInfoText");
          
              return this.__PROXY__.getInfoText(...args);
            
        };
    
        // function 
        RGrid.prototype.isIsometric = function(...args) 
          
        {
          //print("JS: RGrid.prototype.isIsometric");
          
              return this.__PROXY__.isIsometric(...args);
            
        };
    
        // function 
        RGrid.prototype.getProjection = function(...args) 
          
        {
          //print("JS: RGrid.prototype.getProjection");
          
              return this.__PROXY__.getProjection(...args);
            
        };
    
        // function 
        RGrid.prototype.getViewportNumber = function(...args) 
          
        {
          //print("JS: RGrid.prototype.getViewportNumber");
          
              return this.__PROXY__.getViewportNumber(...args);
            
        };
    
        // function 
        RGrid.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RGrid.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        RGrid.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RGrid.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RGrid.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RGrid.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    

      // static functions:
      RGrid.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGrid.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGrid.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGrid.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGrid.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGrid.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      