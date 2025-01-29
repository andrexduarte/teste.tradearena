import { Component } from '@angular/core';
import { dados } from './table.mock';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./style.scss']
})

export class ExtratoComponent {
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = Math.ceil(dados.length / this.itemsPerPage);

  dateRangeForm: FormGroup;
  dadosOriginais = dados;
  dadosFiltrados = [...this.dadosOriginais];
  maxDate: Date = new Date();

  constructor(private fb: FormBuilder) {
    this.dateRangeForm = this.fb.group({
      start: [null],
      end: [null]
    });

    this.dateRangeForm.valueChanges.subscribe(() => {
      this.filterByDateRange();
    });
  }

  onPageChanged(page: number) {
    this.currentPage = page;
  }

  filterByDateRange() {
    const { start, end } = this.dateRangeForm.value;

    if (start && end) {
      this.dadosFiltrados = this.dadosOriginais.filter(item => {
        const dataTransacao = new Date(item.data);
        return dataTransacao >= new Date(start) && dataTransacao <= new Date(end);
      });
    } else {
      this.dadosFiltrados = [...this.dadosOriginais];
    }

    this.totalPages = Math.ceil(this.dadosFiltrados.length / this.itemsPerPage);
  }
}
