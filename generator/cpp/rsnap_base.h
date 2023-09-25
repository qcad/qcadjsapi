

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RSNAP_H_BASE
  #define RSNAP_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RSnap.h"
      
    // Base class for RSnap
      class RSnap_Base : public RSnap {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RSnap
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
RSnap_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RSnap(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RSnap_Base() { }

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
    virtual RVector snap(
      const RVector& position, RGraphicsView& view, double range=RNANDOUBLE
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual RVector snapSup(
        const RVector& position, RGraphicsView& view, double range=RNANDOUBLE
      )
      
      {
        
          return
        RSnap::snap(
          position, view, range
        );
      }
    
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
        RSnap::showUiOptions(
          
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
        RSnap::hideUiOptions(
          
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
  