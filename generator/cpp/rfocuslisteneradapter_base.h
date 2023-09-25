

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RFOCUSLISTENERADAPTER_H_BASE
  #define RFOCUSLISTENERADAPTER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RFocusListenerAdapter.h"
      
    // Base class for RFocusListenerAdapter
      class RFocusListenerAdapter_Base : public RFocusListenerAdapter {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RFocusListenerAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
RFocusListenerAdapter_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RFocusListenerAdapter(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RFocusListenerAdapter_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void updateFocus(
      RDocumentInterface* di
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void updateFocusSup(
        RDocumentInterface* di
      )
      
      {
        RFocusListenerAdapter::updateFocus(
          di
        );
      }
    

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
  