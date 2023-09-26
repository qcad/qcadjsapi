
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
              copyProperties(this, wrapper, RGuiAction);
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
          

        copyProperties(this, wrapper, RGuiAction);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["triggered(bool)"] = Object.getPrototypeOf(this).triggered;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
          }
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
      

      // static functions:
      

        // static function 
        RGuiAction.tr = function() 
          
        {
          //print("JS: RGuiAction.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RGuiAction_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RGuiAction);
  }

  
  else {
    
        print("RGuiAction.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    