import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {
    postForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private postService: PostService,
        private router: Router) { }

    ngOnInit() {
        this.postForm = this.fb.group({
            title: ['', Validators.required],
            text: ['', Validators.required],
        })
    }

    submit() {
        return this.postService.addPost(this.postForm.value).subscribe(
            (response) => {
                this.router.navigate(['/my-posts'])
            },

            (error) => {
                console.log(error)
            }
        )
    }
}
