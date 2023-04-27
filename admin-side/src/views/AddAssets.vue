<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data() {
        return {
            form: {
                name: '',
                address: '',
                price: '',
                image: ''

            }
        }
    },
    methods: {
        ...mapActions(useAppStore, ['addAssets']),
        async doAddAssets() {
            let formData = new FormData();


            formData.append('file', this.form.image);
            this.addAssets(this.form, formData)
        },

        handleFileUpload() {

            this.form.image = this.$refs.file.files[0];
            console.log(this.form.image)
        }

    },

}
</script>
<template >
    <div>
        <div class="container">

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="card mb-3">

                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Add new Assets</h5>
                                    </div>

                                    <form @submit.prevent="doAddAssets" class="row g-3 needs-validation">

                                        <div class="col-12">
                                            <label for="name" class="form-label">Name</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.name" type="text" name="name" class="form-control"
                                                    id="name" required>
                                                <div class="invalid-feedback">Assets Name</div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="name" class="form-label">Address</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.address" type="text" name="name" class="form-control"
                                                    id="name" required>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Price</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.price" type="number" name="name" class="form-control"
                                                    id="name" required>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Image</label>
                                            <div class="input-group has-validation">
                                                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Add</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    </div>
</template>
<style ></style>