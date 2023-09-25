

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RCADTOOLBARPANEL_H_BASE
  #define RCADTOOLBARPANEL_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RCadToolBarPanel.h"
      
    // Base class for RCadToolBarPanel
      class RCadToolBarPanel_Base : public RCadToolBarPanel {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RCadToolBarPanel
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
RCadToolBarPanel_Base
        
      (

        
          RJSApi& _h
          
            ,
          RCadToolBar* parent=0, bool hasBackButton=true
      )
      
        : RCadToolBarPanel(
          parent, hasBackButton
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RCadToolBarPanel_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  