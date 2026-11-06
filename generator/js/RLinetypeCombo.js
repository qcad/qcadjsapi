
      // auto generated
      //var self;

      // class constructor:
      function RLinetypeCombo() {
        

        // should be RLinetypeCombo_BaseJs.call(this, engine):
        //RLinetypeCombo.prototype = new RLinetypeCombo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinetypeCombo.getIdStatic()))) {

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
            qWarning("RLinetypeCombo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLinetypeCombo_Wrapper(
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

      

        //copyProperties(this, wrapper, RLinetypeCombo);
  }

  
  else {
    
        print("RLinetypeCombo(): wrong number / type of arguments");
      
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

      //RLinetypeCombo.prototype = new RLinetypeCombo_BaseJs(engine);
      //RLinetypeCombo.prototype = new RLinetypeCombo_Wrapper(engine);
      RLinetypeCombo.prototype = new Object();


      RLinetypeCombo.prototype.toString = function() {
          //return "RLinetypeCombo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinetypeCombo [JS]";
        };
      RLinetypeCombo.getObjectType = function() {
        return RJSType_RLinetypeCombo.getIdStatic();
      };

      RLinetypeCombo.prototype.getObjectType = function() {
        return RJSType_RLinetypeCombo.getIdStatic();
      };

      RLinetypeCombo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinetypeCombo.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QComboBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InsertPolicy
RLinetypeCombo.NoInsert = RLinetypeCombo_Wrapper.NoInsert;
RLinetypeCombo.InsertAtTop = RLinetypeCombo_Wrapper.InsertAtTop;
RLinetypeCombo.InsertAtCurrent = RLinetypeCombo_Wrapper.InsertAtCurrent;
RLinetypeCombo.InsertAtBottom = RLinetypeCombo_Wrapper.InsertAtBottom;
RLinetypeCombo.InsertAfterCurrent = RLinetypeCombo_Wrapper.InsertAfterCurrent;
RLinetypeCombo.InsertBeforeCurrent = RLinetypeCombo_Wrapper.InsertBeforeCurrent;
RLinetypeCombo.InsertAlphabetically = RLinetypeCombo_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RLinetypeCombo.AdjustToContents = RLinetypeCombo_Wrapper.AdjustToContents;
RLinetypeCombo.AdjustToContentsOnFirstShow = RLinetypeCombo_Wrapper.AdjustToContentsOnFirstShow;
RLinetypeCombo.AdjustToMinimumContentsLengthWithIcon = RLinetypeCombo_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        RLinetypeCombo.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.findChild = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.children = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.property = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.parent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.devType = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isModal = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.window = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFont = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMask = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mask = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.grab = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.update = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.repaint = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.show = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hide = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.close = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.raise = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.lower = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.move = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.resize = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.windowState = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.layout = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setParent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.scroll = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.addAction = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.addActions = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.actions = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.windowType = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.childAt = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.event = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.metric = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.redirected = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.create = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.destroy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMaxVisibleItems");
          
              return this.__PROXY__.setMaxVisibleItems(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMaxCount = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMaxCount");
          
              return this.__PROXY__.setMaxCount(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setDuplicatesEnabled = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setDuplicatesEnabled");
          
              return this.__PROXY__.setDuplicatesEnabled(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setFrame = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.findText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.findText");
          
              return this.__PROXY__.findText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.findData = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.findData");
          
              return this.__PROXY__.findData(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setInsertPolicy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setInsertPolicy");
          
              return this.__PROXY__.setInsertPolicy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setMinimumContentsLength = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setMinimumContentsLength");
          
              return this.__PROXY__.setMinimumContentsLength(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setEditable = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setLineEdit = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setLineEdit");
          
              return this.__PROXY__.setLineEdit(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.lineEdit = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.lineEdit");
          
              return this.__PROXY__.lineEdit(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setValidator = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.completer = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.model = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.itemText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.itemText");
          
              return this.__PROXY__.itemText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.itemIcon = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.itemIcon");
          
              return this.__PROXY__.itemIcon(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.itemData = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.itemData");
          
              return this.__PROXY__.itemData(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.addItem = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.addItems = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.insertItem = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.insertItems = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.removeItem = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setItemText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setItemText");
          
              return this.__PROXY__.setItemText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setItemIcon = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setItemIcon");
          
              return this.__PROXY__.setItemIcon(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setItemData = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setItemData");
          
              return this.__PROXY__.setItemData(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.view = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.view");
          
              return this.__PROXY__.view(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.showPopup = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.showPopup");
          
              return this.__PROXY__.showPopup(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hidePopup = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hidePopup");
          
              return this.__PROXY__.hidePopup(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.clear = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.clearEditText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.clearEditText");
          
              return this.__PROXY__.clearEditText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setEditText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setEditText");
          
              return this.__PROXY__.setEditText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setCurrentText = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setCurrentText");
          
              return this.__PROXY__.setCurrentText(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.init = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.reinit = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.reinit");
          
              return this.__PROXY__.reinit(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.getLinetypePattern");
          
              return this.__PROXY__.getLinetypePattern(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.getLinetypePatternAt = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.getLinetypePatternAt");
          
              return this.__PROXY__.getLinetypePatternAt(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setLinetypePattern");
          
              return this.__PROXY__.setLinetypePattern(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.getOnlyFixed = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.getOnlyFixed");
          
              return this.__PROXY__.getOnlyFixed(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.setOnlyFixed = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.setOnlyFixed");
          
              return this.__PROXY__.setOnlyFixed(...args);
            
        };
    
        // function 
        RLinetypeCombo.prototype.linetypePatternChanged = function(...args) 
          
        {
          //print("JS: RLinetypeCombo.prototype.linetypePatternChanged");
          
              return this.__PROXY__.linetypePatternChanged(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RLinetypeCombo.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'currentData', {
              get: function() {
                  
                      return this.__PROXY__.currentData;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'currentText', {
              get: function() {
                  
                      return this.__PROXY__.currentText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'duplicatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.duplicatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDuplicatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'editable', {
              get: function() {
                  
                      return this.__PROXY__.isEditable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'insertPolicy', {
              get: function() {
                  
                      return this.__PROXY__.insertPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInsertPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'maxCount', {
              get: function() {
                  
                      return this.__PROXY__.maxCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'maxVisibleItems', {
              get: function() {
                  
                      return this.__PROXY__.maxVisibleItems;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxVisibleItems(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'minimumContentsLength', {
              get: function() {
                  
                      return this.__PROXY__.minimumContentsLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumContentsLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'sizeAdjustPolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizeAdjustPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeAdjustPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'editTextChanged', {
            get: function() { return this.__PROXY__.editTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'editTextChanged(QString)', {
              get: function() { return this.__PROXY__.editTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'activated(int)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'textActivated', {
            get: function() { return this.__PROXY__.textActivated; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'textActivated(QString)', {
              get: function() { return this.__PROXY__.textActivated; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'highlighted(int)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'textHighlighted', {
            get: function() { return this.__PROXY__.textHighlighted; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'textHighlighted(QString)', {
              get: function() { return this.__PROXY__.textHighlighted; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'currentIndexChanged', {
            get: function() { return this.__PROXY__.currentIndexChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'currentIndexChanged(int)', {
              get: function() { return this.__PROXY__.currentIndexChanged; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RLinetypeCombo.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLinetypeCombo.prototype, 'valueChanged(RLinetypePattern)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        RLinetypeCombo.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RLinetypeCombo.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RLinetypeCombo.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLinetypeCombo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinetypeCombo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLinetypeCombo.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      