

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RVIEWFOCUSLISTENERADAPTER_H_BASE
  #define RVIEWFOCUSLISTENERADAPTER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RViewFocusListenerAdapter.h"
      
    // Base class for RViewFocusListenerAdapter
      class RViewFocusListenerAdapter_Base : public RViewFocusListenerAdapter {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RViewFocusListenerAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
RViewFocusListenerAdapter_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RViewFocusListenerAdapter(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RViewFocusListenerAdapter_Base() { }

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
      RGraphicsView* view
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void updateFocusSup(
        RGraphicsView* view
      )
      
      {
        RViewFocusListenerAdapter::updateFocus(
          view
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
  