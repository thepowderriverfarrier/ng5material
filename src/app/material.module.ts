//  import each material compponent to use in project
//    using this keeps app module smaller
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//  import any material components here
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

// module deorator imports
@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})

export class MaterialModule { }