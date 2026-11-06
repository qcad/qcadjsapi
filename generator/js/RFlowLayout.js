
      // auto generated
      //var self;

      // class constructor:
      function RFlowLayout() {
        

        // should be RFlowLayout_BaseJs.call(this, engine):
        //RFlowLayout.prototype = new RFlowLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFlowLayout.getIdStatic()))) {

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
            qWarning("RFlowLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RFlowLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFlowLayout);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RFlowLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, RFlowLayout);
  }

  
  else {
    
        print("RFlowLayout(): wrong number / type of arguments");
      
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

      //RFlowLayout.prototype = new RFlowLayout_BaseJs(engine);
      //RFlowLayout.prototype = new RFlowLayout_Wrapper(engine);
      RFlowLayout.prototype = new Object();


      RFlowLayout.prototype.toString = function() {
          //return "RFlowLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFlowLayout [JS]";
        };
      RFlowLayout.getObjectType = function() {
        return RJSType_RFlowLayout.getIdStatic();
      };

      RFlowLayout.prototype.getObjectType = function() {
        return RJSType_RFlowLayout.getIdStatic();
      };

      RFlowLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFlowLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RFlowLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.children = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.property = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.widget = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.alignment = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.update = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setListViewMode = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setListViewMode");
          
              return this.__PROXY__.setListViewMode(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.addItem = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.horizontalSpacing = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.horizontalSpacing");
          
              return this.__PROXY__.horizontalSpacing(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.verticalSpacing = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.verticalSpacing");
          
              return this.__PROXY__.verticalSpacing(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.count = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.itemAt = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.takeAt = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.takeAt");
          
              return this.__PROXY__.takeAt(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.doLayout = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.doLayout");
          
              return this.__PROXY__.doLayout(...args);
            
        };
    
        // function 
        RFlowLayout.prototype.smartSpacing = function(...args) 
          
        {
          //print("JS: RFlowLayout.prototype.smartSpacing");
          
              return this.__PROXY__.smartSpacing(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RFlowLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFlowLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        RFlowLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFlowLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFlowLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFlowLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFlowLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFlowLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      