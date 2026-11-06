
      // auto generated
      //var self;

      // class constructor:
      function RGuiAction() {
        

        // should be RGuiAction_BaseJs.call(this, engine):
        //RGuiAction.prototype = new RGuiAction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGuiAction.getIdStatic()))) {

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
            qWarning("RGuiAction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RGuiAction_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction(): wrong number / type of arguments");
      
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

      //RGuiAction.prototype = new RGuiAction_BaseJs(engine);
      //RGuiAction.prototype = new RGuiAction_Wrapper(engine);
      RGuiAction.prototype = new Object();


      RGuiAction.prototype.toString = function() {
          //return "RGuiAction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGuiAction [JS]";
        };
      RGuiAction.getObjectType = function() {
        return RJSType_RGuiAction.getIdStatic();
      };

      RGuiAction.prototype.getObjectType = function() {
        return RJSType_RGuiAction.getIdStatic();
      };

      RGuiAction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGuiAction.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RFocusListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTransactionListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSelectionListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAction.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: MenuRole
RGuiAction.NoRole = RGuiAction_Wrapper.NoRole;
RGuiAction.TextHeuristicRole = RGuiAction_Wrapper.TextHeuristicRole;
RGuiAction.ApplicationSpecificRole = RGuiAction_Wrapper.ApplicationSpecificRole;
RGuiAction.AboutQtRole = RGuiAction_Wrapper.AboutQtRole;
RGuiAction.AboutRole = RGuiAction_Wrapper.AboutRole;
RGuiAction.PreferencesRole = RGuiAction_Wrapper.PreferencesRole;
RGuiAction.QuitRole = RGuiAction_Wrapper.QuitRole;

  // enum: Priority
RGuiAction.LowPriority = RGuiAction_Wrapper.LowPriority;
RGuiAction.NormalPriority = RGuiAction_Wrapper.NormalPriority;
RGuiAction.HighPriority = RGuiAction_Wrapper.HighPriority;


      // functions:
      
        // function 
        RGuiAction.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RGuiAction.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RGuiAction.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RGuiAction.prototype.findChild = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RGuiAction.prototype.children = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setParent = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RGuiAction.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RGuiAction.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RGuiAction.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RGuiAction.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RGuiAction.prototype.property = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RGuiAction.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RGuiAction.prototype.parent = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RGuiAction.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RGuiAction.prototype.associatedObjects = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.associatedObjects");
          
              return this.__PROXY__.associatedObjects(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setIconText = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setIconText");
          
              return this.__PROXY__.setIconText(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setPriority = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setPriority");
          
              return this.__PROXY__.setPriority(...args);
            
        };
    
        // function 
        RGuiAction.prototype.menu = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.menu");
          
              return this.__PROXY__.menu(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setMenu = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setMenu");
          
              return this.__PROXY__.setMenu(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setSeparator = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setSeparator");
          
              return this.__PROXY__.setSeparator(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isSeparator = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isSeparator");
          
              return this.__PROXY__.isSeparator(...args);
            
        };
    
        // function 
        RGuiAction.prototype.shortcuts = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.shortcuts");
          
              return this.__PROXY__.shortcuts(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setShortcutContext = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setShortcutContext");
          
              return this.__PROXY__.setShortcutContext(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setFont = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
    
        // function 
        RGuiAction.prototype.data = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setData = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RGuiAction.prototype.showStatusText = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.showStatusText");
          
              return this.__PROXY__.showStatusText(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setMenuRole = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setMenuRole");
          
              return this.__PROXY__.setMenuRole(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setIconVisibleInMenu = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setIconVisibleInMenu");
          
              return this.__PROXY__.setIconVisibleInMenu(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isIconVisibleInMenu = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isIconVisibleInMenu");
          
              return this.__PROXY__.isIconVisibleInMenu(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setShortcutVisibleInContextMenu = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setShortcutVisibleInContextMenu");
          
              return this.__PROXY__.setShortcutVisibleInContextMenu(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isShortcutVisibleInContextMenu = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isShortcutVisibleInContextMenu");
          
              return this.__PROXY__.isShortcutVisibleInContextMenu(...args);
            
        };
    
        // function 
        RGuiAction.prototype.event = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RGuiAction.prototype.trigger = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.trigger");
          
              return this.__PROXY__.trigger(...args);
            
        };
    
        // function 
        RGuiAction.prototype.hover = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.hover");
          
              return this.__PROXY__.hover(...args);
            
        };
    
        // function 
        RGuiAction.prototype.toggle = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RGuiAction.prototype.qt_mac_clear_status_text = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.qt_mac_clear_status_text");
          
              return this.__PROXY__.qt_mac_clear_status_text(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setText = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RGuiAction.prototype.initTexts = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.initTexts");
          
              return this.__PROXY__.initTexts(...args);
            
        };
    
        // function 
        RGuiAction.prototype.init = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RGuiAction.prototype.formatToolTip = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.formatToolTip");
          
              return this.__PROXY__.formatToolTip(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getToolTip = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getToolTip");
          
              return this.__PROXY__.getToolTip(...args);
            
        };
    
        // function 
        RGuiAction.prototype.addShortcut = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.addShortcut");
          
              return this.__PROXY__.addShortcut(...args);
            
        };
    
        // function 
        RGuiAction.prototype.removeShortcuts = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.removeShortcuts");
          
              return this.__PROXY__.removeShortcuts(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setDefaultShortcut = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setDefaultShortcut");
          
              return this.__PROXY__.setDefaultShortcut(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setShortcuts = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setShortcuts");
          
              return this.__PROXY__.setShortcuts(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setShortcutsFromStrings = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setShortcutsFromStrings");
          
              return this.__PROXY__.setShortcutsFromStrings(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getShortcuts = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getShortcuts");
          
              return this.__PROXY__.getShortcuts(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setDefaultShortcuts = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setDefaultShortcuts");
          
              return this.__PROXY__.setDefaultShortcuts(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getDefaultShortcuts = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getDefaultShortcuts");
          
              return this.__PROXY__.getDefaultShortcuts(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setShortcutText = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setShortcutText");
          
              return this.__PROXY__.setShortcutText(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getShortcutText = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getShortcutText");
          
              return this.__PROXY__.getShortcutText(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getShortcutsString = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getShortcutsString");
          
              return this.__PROXY__.getShortcutsString(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setGroupSortOrderStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setGroupSortOrderStatic");
          
              return this.__PROXY__.setGroupSortOrderStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setGroupSortOrderOverrideStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setGroupSortOrderOverrideStatic");
          
              return this.__PROXY__.setGroupSortOrderOverrideStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getGroupSortOrderStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getGroupSortOrderStatic");
          
              return this.__PROXY__.getGroupSortOrderStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setSortOrderStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setSortOrderStatic");
          
              return this.__PROXY__.setSortOrderStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setSortOrderOverrideStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setSortOrderOverrideStatic");
          
              return this.__PROXY__.setSortOrderOverrideStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getSortOrderStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getSortOrderStatic");
          
              return this.__PROXY__.getSortOrderStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setGroupSortOrder = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setGroupSortOrder");
          
              return this.__PROXY__.setGroupSortOrder(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setGroupSortOrderOverride = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setGroupSortOrderOverride");
          
              return this.__PROXY__.setGroupSortOrderOverride(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getGroupSortOrder = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getGroupSortOrder");
          
              return this.__PROXY__.getGroupSortOrder(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setSortOrder = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setSortOrder");
          
              return this.__PROXY__.setSortOrder(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setSortOrderOverride = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setSortOrderOverride");
          
              return this.__PROXY__.setSortOrderOverride(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getSortOrder = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getSortOrder");
          
              return this.__PROXY__.getSortOrder(...args);
            
        };
    
        // function 
        RGuiAction.prototype.addToMenu = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.addToMenu");
          
              return this.__PROXY__.addToMenu(...args);
            
        };
    
        // function 
        RGuiAction.prototype.addToToolBar = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.addToToolBar");
          
              return this.__PROXY__.addToToolBar(...args);
            
        };
    
        // function 
        RGuiAction.prototype.fixSeparators = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.fixSeparators");
          
              return this.__PROXY__.fixSeparators(...args);
            
        };
    
        // function 
        RGuiAction.prototype.addSeparatorToWidget = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.addSeparatorToWidget");
          
              return this.__PROXY__.addSeparatorToWidget(...args);
            
        };
    
        // function 
        RGuiAction.prototype.addToWidget = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.addToWidget");
          
              return this.__PROXY__.addToWidget(...args);
            
        };
    
        // function 
        RGuiAction.prototype.removeFromWidget = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.removeFromWidget");
          
              return this.__PROXY__.removeFromWidget(...args);
            
        };
    
        // function 
        RGuiAction.prototype.updateIcons = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.updateIcons");
          
              return this.__PROXY__.updateIcons(...args);
            
        };
    
        // function 
        RGuiAction.prototype.updateIcon = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.updateIcon");
          
              return this.__PROXY__.updateIcon(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setIcon = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        RGuiAction.prototype.disableIcon = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.disableIcon");
          
              return this.__PROXY__.disableIcon(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isIconDisabled = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isIconDisabled");
          
              return this.__PROXY__.isIconDisabled(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setEnabledOverride = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setEnabledOverride");
          
              return this.__PROXY__.setEnabledOverride(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setChecked = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
    
        // function 
        RGuiAction.prototype.triggerGroupDefault = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.triggerGroupDefault");
          
              return this.__PROXY__.triggerGroupDefault(...args);
            
        };
    
        // function 
        RGuiAction.prototype.triggerGroupDefaults = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.triggerGroupDefaults");
          
              return this.__PROXY__.triggerGroupDefaults(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isChecked = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setForceGlobal = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setForceGlobal");
          
              return this.__PROXY__.setForceGlobal(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getForceGlobal = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getForceGlobal");
          
              return this.__PROXY__.getForceGlobal(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setRequiresDocument = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setRequiresDocument");
          
              return this.__PROXY__.setRequiresDocument(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getRequiresDocument = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getRequiresDocument");
          
              return this.__PROXY__.getRequiresDocument(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setRequiresSelection = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setRequiresSelection");
          
              return this.__PROXY__.setRequiresSelection(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getRequiresSelection = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getRequiresSelection");
          
              return this.__PROXY__.getRequiresSelection(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setRequiresUndoableTransaction = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setRequiresUndoableTransaction");
          
              return this.__PROXY__.setRequiresUndoableTransaction(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getRequiresUndoableTransaction = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getRequiresUndoableTransaction");
          
              return this.__PROXY__.getRequiresUndoableTransaction(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setRequiresRedoableTransaction = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setRequiresRedoableTransaction");
          
              return this.__PROXY__.setRequiresRedoableTransaction(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getRequiresRedoableTransaction = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getRequiresRedoableTransaction");
          
              return this.__PROXY__.getRequiresRedoableTransaction(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setOverride = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setOverride");
          
              return this.__PROXY__.setOverride(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isOverride = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isOverride");
          
              return this.__PROXY__.isOverride(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setAllowInterrupt = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setAllowInterrupt");
          
              return this.__PROXY__.setAllowInterrupt(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getAllowInterrupt = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getAllowInterrupt");
          
              return this.__PROXY__.getAllowInterrupt(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setNoState = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setNoState");
          
              return this.__PROXY__.setNoState(...args);
            
        };
    
        // function 
        RGuiAction.prototype.hasNoState = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.hasNoState");
          
              return this.__PROXY__.hasNoState(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setToggleable = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setToggleable");
          
              return this.__PROXY__.setToggleable(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isToggleable = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isToggleable");
          
              return this.__PROXY__.isToggleable(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setUniqueGroup = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setUniqueGroup");
          
              return this.__PROXY__.setUniqueGroup(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getUniqueGroup = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getUniqueGroup");
          
              return this.__PROXY__.getUniqueGroup(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getMainCommand = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getMainCommand");
          
              return this.__PROXY__.getMainCommand(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getCommands = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getCommands");
          
              return this.__PROXY__.getCommands(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getDefaultCommands = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getDefaultCommands");
          
              return this.__PROXY__.getDefaultCommands(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setDefaultCommands = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setDefaultCommands");
          
              return this.__PROXY__.setDefaultCommands(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setCommands = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setCommands");
          
              return this.__PROXY__.setCommands(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setScriptFile = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setScriptFile");
          
              return this.__PROXY__.setScriptFile(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getScriptFile = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getScriptFile");
          
              return this.__PROXY__.getScriptFile(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getScriptClass = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getScriptClass");
          
              return this.__PROXY__.getScriptClass(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setGroup = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setGroup");
          
              return this.__PROXY__.setGroup(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getGroup = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getGroup");
          
              return this.__PROXY__.getGroup(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setGroupDefault = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setGroupDefault");
          
              return this.__PROXY__.setGroupDefault(...args);
            
        };
    
        // function 
        RGuiAction.prototype.isGroupDefault = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.isGroupDefault");
          
              return this.__PROXY__.isGroupDefault(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getActions = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getActions");
          
              return this.__PROXY__.getActions(...args);
            
        };
    
        // function 
        RGuiAction.prototype.triggerByCommand = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.triggerByCommand");
          
              return this.__PROXY__.triggerByCommand(...args);
            
        };
    
        // function 
        RGuiAction.prototype.triggerByShortcut = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.triggerByShortcut");
          
              return this.__PROXY__.triggerByShortcut(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getByScriptFile = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getByScriptFile");
          
              return this.__PROXY__.getByScriptFile(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getByClassName = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getByClassName");
          
              return this.__PROXY__.getByClassName(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getByCommand = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getByCommand");
          
              return this.__PROXY__.getByCommand(...args);
            
        };
    
        // function 
        RGuiAction.prototype.triggerByScriptFile = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.triggerByScriptFile");
          
              return this.__PROXY__.triggerByScriptFile(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getAvailableCommands = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getAvailableCommands");
          
              return this.__PROXY__.getAvailableCommands(...args);
            
        };
    
        // function 
        RGuiAction.prototype.clear = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RGuiAction.prototype.updateTransactionListener = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.updateTransactionListener");
          
              return this.__PROXY__.updateTransactionListener(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setCurrentBlock");
          
              return this.__PROXY__.setCurrentBlock(...args);
            
        };
    
        // function 
        RGuiAction.prototype.updateSelectionListener = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.updateSelectionListener");
          
              return this.__PROXY__.updateSelectionListener(...args);
            
        };
    
        // function 
        RGuiAction.prototype.updateFocus = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.updateFocus");
          
              return this.__PROXY__.updateFocus(...args);
            
        };
    
        // function 
        RGuiAction.prototype.addArgument = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.addArgument");
          
              return this.__PROXY__.addArgument(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getArguments = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getArguments");
          
              return this.__PROXY__.getArguments(...args);
            
        };
    
        // function 
        RGuiAction.prototype.clearArguments = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.clearArguments");
          
              return this.__PROXY__.clearArguments(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setWidgetNamesStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setWidgetNamesStatic");
          
              return this.__PROXY__.setWidgetNamesStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getWidgetNamesStatic = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getWidgetNamesStatic");
          
              return this.__PROXY__.getWidgetNamesStatic(...args);
            
        };
    
        // function 
        RGuiAction.prototype.setWidgetNames = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.setWidgetNames");
          
              return this.__PROXY__.setWidgetNames(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getWidgetNames = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getWidgetNames");
          
              return this.__PROXY__.getWidgetNames(...args);
            
        };
    
        // function 
        RGuiAction.prototype.getIconPath = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.getIconPath");
          
              return this.__PROXY__.getIconPath(...args);
            
        };
    
        // function 
        RGuiAction.prototype.slotTrigger = function(...args) 
          
        {
          //print("JS: RGuiAction.prototype.slotTrigger");
          
              return this.__PROXY__.slotTrigger(...args);
            
        };
    

      // static functions:
      

        // static function 
        RGuiAction.formatToolTip = function() 
          
        {
          //print("JS: RGuiAction.formatToolTip");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.formatToolTip(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.formatToolTip(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.setGroupSortOrderStatic = function() 
          
        {
          //print("JS: RGuiAction.setGroupSortOrderStatic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.setGroupSortOrderStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.setGroupSortOrderStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.setGroupSortOrderOverrideStatic = function() 
          
        {
          //print("JS: RGuiAction.setGroupSortOrderOverrideStatic");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.setGroupSortOrderOverrideStatic(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.setGroupSortOrderOverrideStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getGroupSortOrderStatic = function() 
          
        {
          //print("JS: RGuiAction.getGroupSortOrderStatic");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getGroupSortOrderStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getGroupSortOrderStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.setSortOrderStatic = function() 
          
        {
          //print("JS: RGuiAction.setSortOrderStatic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.setSortOrderStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.setSortOrderStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.setSortOrderOverrideStatic = function() 
          
        {
          //print("JS: RGuiAction.setSortOrderOverrideStatic");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.setSortOrderOverrideStatic(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.setSortOrderOverrideStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getSortOrderStatic = function() 
          
        {
          //print("JS: RGuiAction.getSortOrderStatic");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getSortOrderStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getSortOrderStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.fixSeparators = function() 
          
        {
          //print("JS: RGuiAction.fixSeparators");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.fixSeparators(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.fixSeparators(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.addSeparatorToWidget = function() 
          
        {
          //print("JS: RGuiAction.addSeparatorToWidget");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.addSeparatorToWidget(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.addSeparatorToWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.addToWidget = function() 
          
        {
          //print("JS: RGuiAction.addToWidget");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.addToWidget(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.addToWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.removeFromWidget = function() 
          
        {
          //print("JS: RGuiAction.removeFromWidget");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.removeFromWidget(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.removeFromWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.updateIcons = function() 
          
        {
          //print("JS: RGuiAction.updateIcons");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.updateIcons(
                  
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.updateIcons(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.triggerGroupDefault = function() 
          
        {
          //print("JS: RGuiAction.triggerGroupDefault");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.triggerGroupDefault(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.triggerGroupDefault(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.triggerGroupDefaults = function() 
          
        {
          //print("JS: RGuiAction.triggerGroupDefaults");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.triggerGroupDefaults(
                  
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.triggerGroupDefaults(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getActions = function() 
          
        {
          //print("JS: RGuiAction.getActions");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getActions(
                  
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getActions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.triggerByCommand = function() 
          
        {
          //print("JS: RGuiAction.triggerByCommand");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.triggerByCommand(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.triggerByCommand(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.triggerByShortcut = function() 
          
        {
          //print("JS: RGuiAction.triggerByShortcut");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.triggerByShortcut(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.triggerByShortcut(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getByScriptFile = function() 
          
        {
          //print("JS: RGuiAction.getByScriptFile");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getByScriptFile(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getByScriptFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getByClassName = function() 
          
        {
          //print("JS: RGuiAction.getByClassName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getByClassName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getByClassName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getByCommand = function() 
          
        {
          //print("JS: RGuiAction.getByCommand");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getByCommand(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getByCommand(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.triggerByScriptFile = function() 
          
        {
          //print("JS: RGuiAction.triggerByScriptFile");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.triggerByScriptFile(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.triggerByScriptFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getAvailableCommands = function() 
          
        {
          //print("JS: RGuiAction.getAvailableCommands");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getAvailableCommands(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getAvailableCommands(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getAvailableCommands(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.clear = function() 
          
        {
          //print("JS: RGuiAction.clear");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.clear(
                  
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.clear(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.setWidgetNamesStatic = function() 
          
        {
          //print("JS: RGuiAction.setWidgetNamesStatic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.setWidgetNamesStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.setWidgetNamesStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getWidgetNamesStatic = function() 
          
        {
          //print("JS: RGuiAction.getWidgetNamesStatic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getWidgetNamesStatic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getWidgetNamesStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGuiAction.getIconPath = function() 
          
        {
          //print("JS: RGuiAction.getIconPath");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.getIconPath(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.getIconPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(RGuiAction.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'iconText', {
              get: function() {
                  
                      return this.__PROXY__.iconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'shortcutContext', {
              get: function() {
                  
                      return this.__PROXY__.shortcutContext;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcutContext(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'menuRole', {
              get: function() {
                  
                      return this.__PROXY__.menuRole;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMenuRole(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'iconVisibleInMenu', {
              get: function() {
                  
                      return this.__PROXY__.isIconVisibleInMenu();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconVisibleInMenu(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'shortcutVisibleInContextMenu', {
              get: function() {
                  
                      return this.__PROXY__.isShortcutVisibleInContextMenu();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcutVisibleInContextMenu(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGuiAction.prototype, 'priority', {
              get: function() {
                  
                      return this.__PROXY__.priority;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPriority(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RGuiAction.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        
        Object.defineProperty(RGuiAction.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(RGuiAction.prototype, 'triggered(bool)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        
        Object.defineProperty(RGuiAction.prototype, 'hovered', {
            get: function() { return this.__PROXY__.hovered; },
            configurable: true
        });
        
        Object.defineProperty(RGuiAction.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(RGuiAction.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        
        Object.defineProperty(RGuiAction.prototype, 'postTriggered', {
            get: function() { return this.__PROXY__.postTriggered; },
            configurable: true
        });
        RGuiAction.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGuiAction.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGuiAction.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGuiAction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGuiAction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGuiAction.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      