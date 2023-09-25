

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RSNAPREFERENCE_H_BASE
  #define RSNAPREFERENCE_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RSnapReference.h"
      
    // Base class for RSnapReference
      class RSnapReference_Base : public RSnapReference {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RSnapReference
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
RSnapReference_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RSnapReference(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RSnapReference_Base() { }

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
    virtual void showUiOptions(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void showUiOptionsSup(
        
      )
      
      {
        RSnapReference::showUiOptions(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void hideUiOptions(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void hideUiOptionsSup(
        
      )
      
      {
        RSnapReference::hideUiOptions(
          
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
  