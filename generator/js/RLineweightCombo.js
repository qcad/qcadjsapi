
      // auto generated
      //var self;

      // class constructor:
      function RLineweightCombo() {
        

        // should be RLineweightCombo_BaseJs.call(this, engine):
        //RLineweightCombo.prototype = new RLineweightCombo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLineweightCombo.getIdStatic()))) {

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
            qWarning("RLineweightCombo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLineweightCombo_Wrapper(
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

      

        //copyProperties(this, wrapper, RLineweightCombo);
  }

  
  else {
    
        print("RLineweightCombo(): wrong number / type of arguments");
      
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

      //RLineweightCombo.prototype = new RLineweightCombo_BaseJs(engine);
      //RLineweightCombo.prototype = new RLineweightCombo_Wrapper(engine);
      RLineweightCombo.prototype = new Object();


      RLineweightCombo.prototype.toString = function() {
          //return "RLineweightCombo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLineweightCombo [JS]";
        };
      RLineweightCombo.getObjectType = function() {
        return RJSType_RLineweightCombo.getIdStatic();
      };

      RLineweightCombo.prototype.getObjectType = function() {
        return RJSType_RLineweightCombo.getIdStatic();
      };

      RLineweightCombo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLineweightCombo.getIdStatic()) {
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
RLineweightCombo.NoInsert = RLineweightCombo_Wrapper.NoInsert;
RLineweightCombo.InsertAtTop = RLineweightCombo_Wrapper.InsertAtTop;
RLineweightCombo.InsertAtCurrent = RLineweightCombo_Wrapper.InsertAtCurrent;
RLineweightCombo.InsertAtBottom = RLineweightCombo_Wrapper.InsertAtBottom;
RLineweightCombo.InsertAfterCurrent = RLineweightCombo_Wrapper.InsertAfterCurrent;
RLineweightCombo.InsertBeforeCurrent = RLineweightCombo_Wrapper.InsertBeforeCurrent;
RLineweightCombo.InsertAlphabetically = RLineweightCombo_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RLineweightCombo.AdjustToContents = RLineweightCombo_Wrapper.AdjustToContents;
RLineweightCombo.AdjustToContentsOnFirstShow = RLineweightCombo_Wrapper.AdjustToContentsOnFirstShow;
RLineweightCombo.AdjustToMinimumContentsLengthWithIcon = RLineweightCombo_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        RLineweightCombo.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.findChild = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.children = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.property = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.parent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.devType = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isModal = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.window = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFont = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMask = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mask = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.grab = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.update = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.repaint = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.show = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hide = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.close = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.raise = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.lower = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.move = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.resize = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.windowState = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.layout = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setParent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.scroll = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.addAction = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.addActions = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.actions = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.windowType = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.childAt = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.event = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.metric = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.redirected = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.create = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.destroy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMaxVisibleItems");
          
              return this.__PROXY__.setMaxVisibleItems(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMaxCount = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMaxCount");
          
              return this.__PROXY__.setMaxCount(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setDuplicatesEnabled = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setDuplicatesEnabled");
          
              return this.__PROXY__.setDuplicatesEnabled(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setFrame = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.findText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.findText");
          
              return this.__PROXY__.findText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.findData = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.findData");
          
              return this.__PROXY__.findData(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setInsertPolicy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setInsertPolicy");
          
              return this.__PROXY__.setInsertPolicy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setMinimumContentsLength = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setMinimumContentsLength");
          
              return this.__PROXY__.setMinimumContentsLength(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setEditable = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setLineEdit = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setLineEdit");
          
              return this.__PROXY__.setLineEdit(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.lineEdit = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.lineEdit");
          
              return this.__PROXY__.lineEdit(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setValidator = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.completer = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.model = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.itemText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.itemText");
          
              return this.__PROXY__.itemText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.itemIcon = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.itemIcon");
          
              return this.__PROXY__.itemIcon(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.itemData = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.itemData");
          
              return this.__PROXY__.itemData(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.addItem = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.addItems = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.insertItem = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.insertItems = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.removeItem = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setItemText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setItemText");
          
              return this.__PROXY__.setItemText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setItemIcon = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setItemIcon");
          
              return this.__PROXY__.setItemIcon(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setItemData = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setItemData");
          
              return this.__PROXY__.setItemData(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.view = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.view");
          
              return this.__PROXY__.view(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.showPopup = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.showPopup");
          
              return this.__PROXY__.showPopup(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hidePopup = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hidePopup");
          
              return this.__PROXY__.hidePopup(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.clear = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.clearEditText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.clearEditText");
          
              return this.__PROXY__.clearEditText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setEditText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setEditText");
          
              return this.__PROXY__.setEditText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setCurrentText = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setCurrentText");
          
              return this.__PROXY__.setCurrentText(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.init = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.getLineweight");
          
              return this.__PROXY__.getLineweight(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setLineweight");
          
              return this.__PROXY__.setLineweight(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.getOnlyFixed = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.getOnlyFixed");
          
              return this.__PROXY__.getOnlyFixed(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setOnlyFixed = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setOnlyFixed");
          
              return this.__PROXY__.setOnlyFixed(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.getNoDefault = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.getNoDefault");
          
              return this.__PROXY__.getNoDefault(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.setNoDefault = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.setNoDefault");
          
              return this.__PROXY__.setNoDefault(...args);
            
        };
    
        // function 
        RLineweightCombo.prototype.lineweightChanged = function(...args) 
          
        {
          //print("JS: RLineweightCombo.prototype.lineweightChanged");
          
              return this.__PROXY__.lineweightChanged(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RLineweightCombo.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'currentData', {
              get: function() {
                  
                      return this.__PROXY__.currentData;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'currentText', {
              get: function() {
                  
                      return this.__PROXY__.currentText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'duplicatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.duplicatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDuplicatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'editable', {
              get: function() {
                  
                      return this.__PROXY__.isEditable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'insertPolicy', {
              get: function() {
                  
                      return this.__PROXY__.insertPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInsertPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'maxCount', {
              get: function() {
                  
                      return this.__PROXY__.maxCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'maxVisibleItems', {
              get: function() {
                  
                      return this.__PROXY__.maxVisibleItems;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxVisibleItems(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'minimumContentsLength', {
              get: function() {
                  
                      return this.__PROXY__.minimumContentsLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumContentsLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RLineweightCombo.prototype, 'sizeAdjustPolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizeAdjustPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeAdjustPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'editTextChanged', {
            get: function() { return this.__PROXY__.editTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'editTextChanged(QString)', {
              get: function() { return this.__PROXY__.editTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'activated(int)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'textActivated', {
            get: function() { return this.__PROXY__.textActivated; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'textActivated(QString)', {
              get: function() { return this.__PROXY__.textActivated; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'highlighted(int)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'textHighlighted', {
            get: function() { return this.__PROXY__.textHighlighted; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'textHighlighted(QString)', {
              get: function() { return this.__PROXY__.textHighlighted; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'currentIndexChanged', {
            get: function() { return this.__PROXY__.currentIndexChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'currentIndexChanged(int)', {
              get: function() { return this.__PROXY__.currentIndexChanged; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RLineweightCombo.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(RLineweightCombo.prototype, 'valueChanged(RLineweight::Lineweight)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        RLineweightCombo.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RLineweightCombo.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RLineweightCombo.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLineweightCombo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLineweightCombo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLineweightCombo.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      