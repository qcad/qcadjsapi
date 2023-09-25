

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RSNAPDISTANCE_H_BASE
  #define RSNAPDISTANCE_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RSnapDistance.h"
      
    // Base class for RSnapDistance
      class RSnapDistance_Base : public RSnapDistance {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RSnapDistance
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
RSnapDistance_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RSnapDistance(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RSnapDistance_Base() { }

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
        RSnapDistance::showUiOptions(
          
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
        RSnapDistance::hideUiOptions(
          
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
  