
      // auto generated
      //var self;

      // class constructor:
      function RListView() {
        

        // should be RListView_BaseJs.call(this, engine):
        //RListView.prototype = new RListView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RListView.getIdStatic()))) {

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
            qWarning("RListView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RListView_Wrapper(
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

      

        //copyProperties(this, wrapper, RListView);
  }

  
  else {
    
        print("RListView(): wrong number / type of arguments");
      
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

      //RListView.prototype = new RListView_BaseJs(engine);
      //RListView.prototype = new RListView_Wrapper(engine);
      RListView.prototype = new Object();


      RListView.prototype.toString = function() {
          //return "RListView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RListView [JS]";
        };
      RListView.getObjectType = function() {
        return RJSType_RListView.getIdStatic();
      };

      RListView.prototype.getObjectType = function() {
        return RJSType_RListView.getIdStatic();
      };

      RListView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RListView.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QListView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RListView.NoFrame = RListView_Wrapper.NoFrame;
RListView.Box = RListView_Wrapper.Box;
RListView.Panel = RListView_Wrapper.Panel;
RListView.WinPanel = RListView_Wrapper.WinPanel;
RListView.HLine = RListView_Wrapper.HLine;
RListView.VLine = RListView_Wrapper.VLine;
RListView.StyledPanel = RListView_Wrapper.StyledPanel;

  // enum: Shadow
RListView.Plain = RListView_Wrapper.Plain;
RListView.Raised = RListView_Wrapper.Raised;
RListView.Sunken = RListView_Wrapper.Sunken;

  // enum: StyleMask
RListView.Shadow_Mask = RListView_Wrapper.Shadow_Mask;
RListView.Shape_Mask = RListView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
RListView.AdjustIgnored = RListView_Wrapper.AdjustIgnored;
RListView.AdjustToContentsOnFirstShow = RListView_Wrapper.AdjustToContentsOnFirstShow;
RListView.AdjustToContents = RListView_Wrapper.AdjustToContents;

  // enum: SelectionMode
RListView.NoSelection = RListView_Wrapper.NoSelection;
RListView.SingleSelection = RListView_Wrapper.SingleSelection;
RListView.MultiSelection = RListView_Wrapper.MultiSelection;
RListView.ExtendedSelection = RListView_Wrapper.ExtendedSelection;
RListView.ContiguousSelection = RListView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
RListView.SelectItems = RListView_Wrapper.SelectItems;
RListView.SelectRows = RListView_Wrapper.SelectRows;
RListView.SelectColumns = RListView_Wrapper.SelectColumns;

  // enum: ScrollHint
RListView.EnsureVisible = RListView_Wrapper.EnsureVisible;
RListView.PositionAtTop = RListView_Wrapper.PositionAtTop;
RListView.PositionAtBottom = RListView_Wrapper.PositionAtBottom;
RListView.PositionAtCenter = RListView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
RListView.NoEditTriggers = RListView_Wrapper.NoEditTriggers;
RListView.CurrentChanged = RListView_Wrapper.CurrentChanged;
RListView.DoubleClicked = RListView_Wrapper.DoubleClicked;
RListView.SelectedClicked = RListView_Wrapper.SelectedClicked;
RListView.EditKeyPressed = RListView_Wrapper.EditKeyPressed;
RListView.AnyKeyPressed = RListView_Wrapper.AnyKeyPressed;
RListView.AllEditTriggers = RListView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
RListView.ScrollPerItem = RListView_Wrapper.ScrollPerItem;
RListView.ScrollPerPixel = RListView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
RListView.NoDragDrop = RListView_Wrapper.NoDragDrop;
RListView.DragOnly = RListView_Wrapper.DragOnly;
RListView.DropOnly = RListView_Wrapper.DropOnly;
RListView.DragDrop = RListView_Wrapper.DragDrop;
RListView.InternalMove = RListView_Wrapper.InternalMove;

  // enum: Movement
RListView.Static = RListView_Wrapper.Static;
RListView.Free = RListView_Wrapper.Free;
RListView.Snap = RListView_Wrapper.Snap;

  // enum: Flow
RListView.LeftToRight = RListView_Wrapper.LeftToRight;
RListView.TopToBottom = RListView_Wrapper.TopToBottom;

  // enum: ResizeMode
RListView.Fixed = RListView_Wrapper.Fixed;
RListView.Adjust = RListView_Wrapper.Adjust;

  // enum: LayoutMode
RListView.SinglePass = RListView_Wrapper.SinglePass;
RListView.Batched = RListView_Wrapper.Batched;

  // enum: ViewMode
RListView.ListMode = RListView_Wrapper.ListMode;
RListView.IconMode = RListView_Wrapper.IconMode;


      // functions:
      
        // function 
        RListView.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RListView.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RListView.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RListView.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RListView.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RListView.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RListView.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RListView.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RListView.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RListView.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RListView.prototype.findChild = function(...args) 
          
        {
          //print("JS: RListView.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RListView.prototype.children = function(...args) 
          
        {
          //print("JS: RListView.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RListView.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RListView.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RListView.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RListView.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RListView.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RListView.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RListView.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RListView.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RListView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RListView.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RListView.prototype.property = function(...args) 
          
        {
          //print("JS: RListView.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RListView.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RListView.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RListView.prototype.parent = function(...args) 
          
        {
          //print("JS: RListView.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RListView.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RListView.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RListView.prototype.devType = function(...args) 
          
        {
          //print("JS: RListView.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RListView.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RListView.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RListView.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RListView.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RListView.prototype.isModal = function(...args) 
          
        {
          //print("JS: RListView.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RListView.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RListView.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RListView.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RListView.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RListView.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RListView.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RListView.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RListView.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RListView.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RListView.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RListView.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RListView.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RListView.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RListView.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RListView.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RListView.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RListView.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RListView.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RListView.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RListView.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RListView.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RListView.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RListView.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RListView.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RListView.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RListView.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RListView.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RListView.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RListView.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RListView.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RListView.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RListView.prototype.window = function(...args) 
          
        {
          //print("JS: RListView.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RListView.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RListView.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RListView.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RListView.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RListView.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RListView.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RListView.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RListView.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RListView.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RListView.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RListView.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RListView.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RListView.prototype.setFont = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RListView.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RListView.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RListView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RListView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RListView.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RListView.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RListView.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RListView.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RListView.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RListView.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RListView.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RListView.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RListView.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RListView.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RListView.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RListView.prototype.setMask = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RListView.prototype.mask = function(...args) 
          
        {
          //print("JS: RListView.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RListView.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RListView.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RListView.prototype.grab = function(...args) 
          
        {
          //print("JS: RListView.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RListView.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RListView.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RListView.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RListView.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RListView.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RListView.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RListView.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RListView.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RListView.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RListView.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RListView.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RListView.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RListView.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RListView.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RListView.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RListView.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RListView.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RListView.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RListView.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RListView.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RListView.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RListView.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RListView.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RListView.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RListView.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RListView.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RListView.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RListView.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RListView.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RListView.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RListView.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RListView.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RListView.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RListView.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RListView.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RListView.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RListView.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RListView.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RListView.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RListView.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RListView.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RListView.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RListView.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RListView.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RListView.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RListView.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RListView.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RListView.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RListView.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RListView.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RListView.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RListView.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RListView.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RListView.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RListView.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RListView.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RListView.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RListView.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RListView.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RListView.prototype.repaint = function(...args) 
          
        {
          //print("JS: RListView.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RListView.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RListView.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RListView.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RListView.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RListView.prototype.show = function(...args) 
          
        {
          //print("JS: RListView.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RListView.prototype.hide = function(...args) 
          
        {
          //print("JS: RListView.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RListView.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RListView.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RListView.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RListView.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RListView.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RListView.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RListView.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RListView.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RListView.prototype.close = function(...args) 
          
        {
          //print("JS: RListView.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RListView.prototype.raise = function(...args) 
          
        {
          //print("JS: RListView.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RListView.prototype.lower = function(...args) 
          
        {
          //print("JS: RListView.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RListView.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RListView.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RListView.prototype.move = function(...args) 
          
        {
          //print("JS: RListView.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RListView.prototype.resize = function(...args) 
          
        {
          //print("JS: RListView.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RListView.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RListView.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RListView.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RListView.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RListView.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RListView.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RListView.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RListView.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RListView.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RListView.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RListView.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RListView.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RListView.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RListView.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RListView.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RListView.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RListView.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RListView.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RListView.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RListView.prototype.windowState = function(...args) 
          
        {
          //print("JS: RListView.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RListView.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RListView.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RListView.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RListView.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RListView.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RListView.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RListView.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RListView.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RListView.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RListView.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RListView.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RListView.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RListView.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RListView.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RListView.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RListView.prototype.layout = function(...args) 
          
        {
          //print("JS: RListView.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RListView.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RListView.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RListView.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RListView.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RListView.prototype.setParent = function(...args) 
          
        {
          //print("JS: RListView.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RListView.prototype.scroll = function(...args) 
          
        {
          //print("JS: RListView.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RListView.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RListView.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RListView.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RListView.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RListView.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RListView.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RListView.prototype.addAction = function(...args) 
          
        {
          //print("JS: RListView.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RListView.prototype.addActions = function(...args) 
          
        {
          //print("JS: RListView.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RListView.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RListView.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RListView.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RListView.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RListView.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RListView.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RListView.prototype.actions = function(...args) 
          
        {
          //print("JS: RListView.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RListView.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RListView.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RListView.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RListView.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RListView.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RListView.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RListView.prototype.windowType = function(...args) 
          
        {
          //print("JS: RListView.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RListView.prototype.childAt = function(...args) 
          
        {
          //print("JS: RListView.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RListView.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RListView.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RListView.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RListView.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RListView.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RListView.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RListView.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RListView.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RListView.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RListView.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RListView.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RListView.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RListView.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RListView.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RListView.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RListView.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      RListView.prototype.actionEvent = function() 
        
      {
        //print("JS: RListView.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RListView);
  }

  
  else {
    
        print("RListView.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RListView.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RListView.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RListView.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RListView.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RListView.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RListView.prototype.metric = function(...args) 
          
        {
          //print("JS: RListView.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RListView.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RListView.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RListView.prototype.redirected = function(...args) 
          
        {
          //print("JS: RListView.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RListView.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RListView.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RListView.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RListView.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RListView.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RListView.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RListView.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RListView.prototype.create = function(...args) 
          
        {
          //print("JS: RListView.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RListView.prototype.destroy = function(...args) 
          
        {
          //print("JS: RListView.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RListView.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RListView.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RListView.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RListView.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RListView.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RListView.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RListView.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RListView.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RListView.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RListView.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RListView.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RListView.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RListView.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RListView.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RListView.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RListView.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RListView.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RListView.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RListView.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: RListView.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        RListView.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        RListView.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        RListView.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        RListView.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: RListView.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        RListView.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        RListView.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        RListView.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: RListView.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        RListView.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RListView.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RListView.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: RListView.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        RListView.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: RListView.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        RListView.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: RListView.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        RListView.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: RListView.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        RListView.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        RListView.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        RListView.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        RListView.prototype.viewport = function(...args) 
          
        {
          //print("JS: RListView.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        RListView.prototype.setViewport = function(...args) 
          
        {
          //print("JS: RListView.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        RListView.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        RListView.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: RListView.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        RListView.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        RListView.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: RListView.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
    
        // function 
        RListView.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: RListView.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
    
        // function 
        RListView.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.setModel = function(...args) 
          
        {
          //print("JS: RListView.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
    
        // function 
        RListView.prototype.model = function(...args) 
          
        {
          //print("JS: RListView.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        RListView.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
    
        // function 
        RListView.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: RListView.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
    
        // function 
        RListView.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: RListView.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
    
        // function 
        RListView.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
    
        // function 
        RListView.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
    
        // function 
        RListView.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: RListView.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
    
        // function 
        RListView.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: RListView.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
    
        // function 
        RListView.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: RListView.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
    
        // function 
        RListView.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
    
        // function 
        RListView.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
    
        // function 
        RListView.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
    
        // function 
        RListView.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
    
        // function 
        RListView.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
    
        // function 
        RListView.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: RListView.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
    
        // function 
        RListView.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
    
        // function 
        RListView.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: RListView.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
    
        // function 
        RListView.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: RListView.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
    
        // function 
        RListView.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: RListView.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        RListView.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
    
        // function 
        RListView.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
    
        // function 
        RListView.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: RListView.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
    
        // function 
        RListView.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: RListView.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
    
        // function 
        RListView.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RListView.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
    
        // function 
        RListView.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: RListView.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
    
        // function 
        RListView.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: RListView.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
    
        // function 
        RListView.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
    
        // function 
        RListView.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: RListView.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
    
        // function 
        RListView.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RListView.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RListView.prototype.selectAll = function(...args) 
          
        {
          //print("JS: RListView.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        RListView.prototype.edit = function(...args) 
          
        {
          //print("JS: RListView.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
    
        // function 
        RListView.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: RListView.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
    
        // function 
        RListView.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RListView.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        RListView.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: RListView.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
    
        // function 
        RListView.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: RListView.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
    
        // function 
        RListView.prototype.update = function(...args) 
          
        {
          //print("JS: RListView.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RListView.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RListView.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        RListView.prototype.setMovement = function(...args) 
          
        {
          //print("JS: RListView.prototype.setMovement");
          
              return this.__PROXY__.setMovement(...args);
            
        };
    
        // function 
        RListView.prototype.setFlow = function(...args) 
          
        {
          //print("JS: RListView.prototype.setFlow");
          
              return this.__PROXY__.setFlow(...args);
            
        };
    
        // function 
        RListView.prototype.setWrapping = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWrapping");
          
              return this.__PROXY__.setWrapping(...args);
            
        };
    
        // function 
        RListView.prototype.setResizeMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setResizeMode");
          
              return this.__PROXY__.setResizeMode(...args);
            
        };
    
        // function 
        RListView.prototype.setLayoutMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setLayoutMode");
          
              return this.__PROXY__.setLayoutMode(...args);
            
        };
    
        // function 
        RListView.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
    
        // function 
        RListView.prototype.setBatchSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.setBatchSize");
          
              return this.__PROXY__.setBatchSize(...args);
            
        };
    
        // function 
        RListView.prototype.setGridSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.setGridSize");
          
              return this.__PROXY__.setGridSize(...args);
            
        };
    
        // function 
        RListView.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: RListView.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
    
        // function 
        RListView.prototype.clearPropertyFlags = function(...args) 
          
        {
          //print("JS: RListView.prototype.clearPropertyFlags");
          
              return this.__PROXY__.clearPropertyFlags(...args);
            
        };
    
        // function 
        RListView.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: RListView.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
    
        // function 
        RListView.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: RListView.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
    
        // function 
        RListView.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: RListView.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        RListView.prototype.setUniformItemSizes = function(...args) 
          
        {
          //print("JS: RListView.prototype.setUniformItemSizes");
          
              return this.__PROXY__.setUniformItemSizes(...args);
            
        };
    
        // function 
        RListView.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: RListView.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
    
        // function 
        RListView.prototype.setSelectionRectVisible = function(...args) 
          
        {
          //print("JS: RListView.prototype.setSelectionRectVisible");
          
              return this.__PROXY__.setSelectionRectVisible(...args);
            
        };
    
        // function 
        RListView.prototype.isSelectionRectVisible = function(...args) 
          
        {
          //print("JS: RListView.prototype.isSelectionRectVisible");
          
              return this.__PROXY__.isSelectionRectVisible(...args);
            
        };
    
        // function 
        RListView.prototype.setItemAlignment = function(...args) 
          
        {
          //print("JS: RListView.prototype.setItemAlignment");
          
              return this.__PROXY__.setItemAlignment(...args);
            
        };
    
        // function 
        RListView.prototype.visualRect = function(...args) 
          
        {
          //print("JS: RListView.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
    
        // function 
        RListView.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: RListView.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
    
        // function 
        RListView.prototype.indexAt = function(...args) 
          
        {
          //print("JS: RListView.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
    
        // function 
        RListView.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: RListView.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
    
        // function 
        RListView.prototype.reset = function(...args) 
          
        {
          //print("JS: RListView.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        RListView.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: RListView.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
    
        // function 
        RListView.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: RListView.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBySuper(...args);
            
        };
    
        // function 
        RListView.prototype.resizeContents = function(...args) 
          
        {
          //print("JS: RListView.prototype.resizeContents");
          
              return this.__PROXY__.resizeContentsSuper(...args);
            
        };
    
        // function 
        RListView.prototype.contentsSize = function(...args) 
          
        {
          //print("JS: RListView.prototype.contentsSize");
          
              return this.__PROXY__.contentsSizeSuper(...args);
            
        };
    
        // function 
        RListView.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: RListView.prototype.dataChanged");
          
              return this.__PROXY__.dataChangedSuper(...args);
            
        };
    
        // function 
        RListView.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: RListView.prototype.rowsInserted");
          
              return this.__PROXY__.rowsInsertedSuper(...args);
            
        };
    
        // function 
        RListView.prototype.rowsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: RListView.prototype.rowsAboutToBeRemoved");
          
              return this.__PROXY__.rowsAboutToBeRemovedSuper(...args);
            
        };
    
        // function 
        RListView.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: RListView.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffsetSuper(...args);
            
        };
    
        // function 
        RListView.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: RListView.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffsetSuper(...args);
            
        };
    
        // function 
        RListView.prototype.rectForIndex = function(...args) 
          
        {
          //print("JS: RListView.prototype.rectForIndex");
          
              return this.__PROXY__.rectForIndexSuper(...args);
            
        };
    
        // function 
        RListView.prototype.setPositionForIndex = function(...args) 
          
        {
          //print("JS: RListView.prototype.setPositionForIndex");
          
              return this.__PROXY__.setPositionForIndexSuper(...args);
            
        };
    
        // function 
        RListView.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: RListView.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometriesSuper(...args);
            
        };
    
        // function 
        RListView.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: RListView.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHiddenSuper(...args);
            
        };
    
        // function 
        RListView.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: RListView.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
    
        // function 
        RListView.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: RListView.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
    
        // function 
        RListView.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RListView.prototype.dropEvent");
          
              return this.__PROXY__.dropEventSuper(...args);
            
        };
    
        // function 
        RListView.prototype.startDrag = function(...args) 
          
        {
          //print("JS: RListView.prototype.startDrag");
          
              return this.__PROXY__.startDragSuper(...args);
            
        };
    
        // function 
        RListView.prototype.selectionChanged = function(...args) 
          
        {
          //print("JS: RListView.prototype.selectionChanged");
          
              return this.__PROXY__.selectionChangedSuper(...args);
            
        };
    
        // function 
        RListView.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: RListView.prototype.currentChanged");
          
              return this.__PROXY__.currentChangedSuper(...args);
            
        };
    
        // function 
        RListView.prototype.event = function(...args) 
          
        {
          //print("JS: RListView.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RListView.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'flow', {
              get: function() {
                  
                      return this.__PROXY__.flow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'isWrapping', {
              get: function() {
                  
                      return this.__PROXY__.isWrapping;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWrapping(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'resizeMode', {
              get: function() {
                  
                      return this.__PROXY__.resizeMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setResizeMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'layoutMode', {
              get: function() {
                  
                      return this.__PROXY__.layoutMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'gridSize', {
              get: function() {
                  
                      return this.__PROXY__.gridSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGridSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'viewMode', {
              get: function() {
                  
                      return this.__PROXY__.viewMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setViewMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'uniformItemSizes', {
              get: function() {
                  
                      return this.__PROXY__.uniformItemSizes;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformItemSizes(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'batchSize', {
              get: function() {
                  
                      return this.__PROXY__.batchSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBatchSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'selectionRectVisible', {
              get: function() {
                  
                      return this.__PROXY__.isSelectionRectVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionRectVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'itemAlignment', {
              get: function() {
                  
                      return this.__PROXY__.itemAlignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListView.prototype, 'movement', {
              get: function() {
                  
                      return this.__PROXY__.movement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'viewportEntered', {
            get: function() { return this.__PROXY__.viewportEntered; },
            configurable: true
        });
        
        Object.defineProperty(RListView.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalContextMenuEvent', {
            get: function() { return this.__PROXY__.signalContextMenuEvent; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalContextMenuEvent(QContextMenuEvent*)', {
              get: function() { return this.__PROXY__.signalContextMenuEvent; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalMouseMoveEvent', {
            get: function() { return this.__PROXY__.signalMouseMoveEvent; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalMouseMoveEvent(QMouseEvent*)', {
              get: function() { return this.__PROXY__.signalMouseMoveEvent; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalMousePressEvent', {
            get: function() { return this.__PROXY__.signalMousePressEvent; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalMousePressEvent(QMouseEvent*)', {
              get: function() { return this.__PROXY__.signalMousePressEvent; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalMouseReleaseEvent', {
            get: function() { return this.__PROXY__.signalMouseReleaseEvent; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalMouseReleaseEvent(QMouseEvent*)', {
              get: function() { return this.__PROXY__.signalMouseReleaseEvent; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalDragEnterEvent', {
            get: function() { return this.__PROXY__.signalDragEnterEvent; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalDragEnterEvent(QDragEnterEvent*)', {
              get: function() { return this.__PROXY__.signalDragEnterEvent; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalDragMoveEvent', {
            get: function() { return this.__PROXY__.signalDragMoveEvent; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalDragMoveEvent(QDragMoveEvent*)', {
              get: function() { return this.__PROXY__.signalDragMoveEvent; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalDropEvent', {
            get: function() { return this.__PROXY__.signalDropEvent; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalDropEvent(QDropEvent*)', {
              get: function() { return this.__PROXY__.signalDropEvent; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalStartDrag', {
            get: function() { return this.__PROXY__.signalStartDrag; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalStartDrag(Qt::DropActions)', {
              get: function() { return this.__PROXY__.signalStartDrag; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalSelectionChanged', {
            get: function() { return this.__PROXY__.signalSelectionChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalSelectionChanged(QItemSelection,QItemSelection)', {
              get: function() { return this.__PROXY__.signalSelectionChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalCurrentChanged', {
            get: function() { return this.__PROXY__.signalCurrentChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalCurrentChanged(QModelIndex,QModelIndex)', {
              get: function() { return this.__PROXY__.signalCurrentChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListView.prototype, 'signalToolTipRequested', {
            get: function() { return this.__PROXY__.signalToolTipRequested; },
            configurable: true
        });
        
          Object.defineProperty(RListView.prototype, 'signalToolTipRequested(QHelpEvent*)', {
              get: function() { return this.__PROXY__.signalToolTipRequested; },
              configurable: true
          });
        RListView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RListView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RListView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RListView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RListView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RListView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      