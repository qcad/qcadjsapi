

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RSINGLEAPPLICATION_H_BASE
  #define RSINGLEAPPLICATION_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RSingleApplication.h"
      
    // Base class for RSingleApplication
      class RSingleApplication_Base : public RSingleApplication {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~RSingleApplication_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
      //bool recFlag;

    };
    
  #endif
  